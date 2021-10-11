const basicCategories = require("../../helpers/basicСategories.json");
const Category = require("../../model/categories/model");

const addBasicCategories = async (id) => {
  const categories = Category.collection.initializeOrderedBulkOp();
  basicCategories.forEach((basicCategorie) => {
    categories.insert({ ...basicCategorie, user: id });
  });
  await categories.execute();
};
module.exports = addBasicCategories;
