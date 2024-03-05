import User from '../models/userModel.js';

const register = (req, res) => {
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
  } catch (error) {}
};
