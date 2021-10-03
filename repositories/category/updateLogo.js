const fs = require("fs/promises");
const path = require("path");
//переробити, щоб брала з хелпера
const categoriesDir = path.join(__dirname, "../../", "uploads/categories");
const Category = require("../../model/categories/model");

const updateLogo = async (tempPath, filename, id, originalname) => {

  try {
    await fs.rename(tempPath, uploadPath);
    const logo = `uploads/categories/${id}/${filename}`;
    await Category.findByIdAndUpdate(id, { logo });
    return logo;
  } catch (err) {
    await fs.unlink(tempPath);
    throw err;
  }
};

module.exports = updateLogo;
