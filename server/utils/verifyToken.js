import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};
