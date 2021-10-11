const basicCategories = require("../../helpers/basicСategories.json");
const Category = require("../../model/categories/model");

const addBasicCategories = async (id) => {
  const defaultCats = basicCategories.map(item => ({...item, user: id}));
  await Category.create(defaultCats);
};
module.exports = addBasicCategories;
