const CategoryRepo = require("../../repositories/category");

const getAllCategories = async (req, res) => {
  const categories = await CategoryRepo.getAllCategories(req.user.id);
  return res.OK({categories});
};

module.exports = getAllCategories;
