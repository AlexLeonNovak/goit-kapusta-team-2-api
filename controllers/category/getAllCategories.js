const CategoryRepo = require("../../repositories/category");

const getAllCategories = async (__, res) => {
  const categories = await CategoryRepo.getAllCategories();
  return res.OK({categories});
};

module.exports = getAllCategories;
