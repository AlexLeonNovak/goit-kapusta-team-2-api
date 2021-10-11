const User = require("../../model/users/model");
const ErrorException = require("../../exceptions/error.exception");
const userDto = require("../../dtos/user");
const addBasicCategories = require("../category/addBasicCategories");

const registration = async (email, password) => {
  const candidate = await User.findOne({ email });
  if (candidate) {
    throw ErrorException.BadRequest("User registered already");
  }
  const user = new User({ email });
  user.setPassword(password);
  await user.save();

  await addBasicCategories(user.id);

  return userDto(user);
};

module.exports = registration;
