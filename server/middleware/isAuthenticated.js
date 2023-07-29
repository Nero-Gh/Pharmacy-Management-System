import { verifyToken } from "../utils/verifyToken.js";

const isAuthenticated = (model) => {
  return async (req, res, next) => {
    //get token from header
    const headerObj = req.headers;

    const token = headerObj?.authorization?.split(" ")[1];

    //verify token
    const verifiedToken = verifyToken(token);

    if (verifiedToken) {
      //find user
      const user = await model
        .findById(verifiedToken.id)
        .select("name email password contact role");
      //save the user into req.obj
      req.userAuth = user;
      next();
    } else {
      const err = new Error("Token Expired or invalid");
      next(err);
    }
  };
};

export default isAuthenticated;
