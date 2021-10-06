const Category = require("../../model/categories/model");

const delContactById = async (categoryId) => {
  return await Category.findByIdAndDelete(categoryId);
};

module.exports = delContactById;


