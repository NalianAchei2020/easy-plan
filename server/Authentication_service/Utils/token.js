import jsonwebtoken from 'jsonwebtoken';
import { createError } from './error.js';
import config from '../config.js';

export const generateToken = (user) => {
  return jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, config.SECRET, {
    expiresIn: '24h',
  });
};
