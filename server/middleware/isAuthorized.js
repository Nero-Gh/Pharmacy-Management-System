const isAuthorized = (...role) => {
  return (req, res, next) => {
    //check role from the spread array
    if (!role.includes(req.userAuth.role)) {
      throw new Error("You do not have permission to perform this action.");
    }
    next();
  };
};

export default isAuthorized;
