const fs = require("fs/promises");
const path = require("path");
const Category = require("../../model/categories/model");
const { categoriesDir } = require("../../helpers/directories");

const addCategory = async (name, type, tempPath, filename) => {
  const category = new Category({ name, type });
  const logoName = `${category._id}_${filename}`;
  const logo = `categories/${logoName}`;

  try {
    await fs.rename(tempPath, path.join(categoriesDir, logoName));
  } catch (err) {
    await fs.unlink(tempPath);
    throw err;
  }
  category.logo = logo;
  await category.save();

  return category;
};

module.exports = addCategory;
