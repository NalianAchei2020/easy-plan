import User from '../models/userModel.js';

const register = (req, res) => {
  try {
    const { name, email } = req.body;
    const existingUser = User.findOne({ email });

    if (existingUser) {
      res.status(409).send({ message: 'User already exist' });
    }
  } catch (error) {}
};
