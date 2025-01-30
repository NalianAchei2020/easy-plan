import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import { generateToken } from '../../Utils/token.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Await the promise to find an existing user
    const existingUser = await User.findOne({ email });

    // Check if the user already exists and return early
    if (existingUser) {
      return res.status(409).send({ message: 'User already exists' });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hash,
      isAdmin: false,
    });
    const savedUser = await user.save();

    // Destructure to avoid sending sensitive information
    const { password: _, isAdmin, ...otherDetails } = savedUser._doc;

    // Set cookie and send response
    res
      .cookie('access_token', generateToken(savedUser), {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        path: '/',
      })
      .status(200)
      .json({
        ...otherDetails,
        auth: true,
        isAdmin,
        message: 'User created',
      });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send({ message: err.message });
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
