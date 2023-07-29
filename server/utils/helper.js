import bcrypt from "bcryptjs";

//hash password

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

//verified password
export const isPassMatched = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
