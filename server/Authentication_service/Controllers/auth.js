import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const register = async (req, res) => {
  try {
    const { name, email } = req.body;
    const existingUser = User.findOne({ email });

    if (existingUser) {
      res.status(409).send({ message: 'User already exist' });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      isAdmin: false,
    });
    const savedUser = await user.save();

    const { password, isAdmin, ...otherDatails } = user._doc;
    res
      .cookie('access_token', generateToken(savedUser), {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
      })
      .status(200)
      .json({
        ...otherDatails,
        auth: true,
        isAdmin: isAdmin,
        message: 'User created',
      });
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) return next(createError(404, 'user not found!'));
    const isPasswordCurrent = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCurrent)
      return next(createError(400, 'Wrong username or password!'));

    const { password, isAdmin, ...otherDatails } = user._doc;
    res
      .cookie('access_token', generateToken(user), {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
      })
      .status(200)
      .json({ ...otherDatails, auth: true, isAdmin: isAdmin });
  } catch (err) {
    res.status(500).send({ message: err.message });
    next(err);
  }
};
