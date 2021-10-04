const Category = require("../../model/categories/model");

const updateContactById = async (categoryId) => {
  return await Category.findByIdAndDelete(categoryId);
};

module.exports = updateContactById;


