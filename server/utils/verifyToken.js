import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(token, "mykey", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};
