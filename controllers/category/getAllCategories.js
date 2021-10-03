const CategoryRepo = require("../../repositories/category");

const getAllCategories = async (__, res, next) => {
  const result = await CategoryRepo.getAllCategories(res, next);
  return result;
};

module.exports = getAllCategories;
