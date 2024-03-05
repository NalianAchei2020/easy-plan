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
