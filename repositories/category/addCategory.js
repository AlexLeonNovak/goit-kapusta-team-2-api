const fs = require('fs/promises');
const path = require('path');

const Category = require('../../model/categories/model');
const { categoriesDir } = require('../../helpers/directories');

const addCategory = async (name, type, file) => {

    const { path: pathFile, name: filename } = file.logo;
    const category = new Category({name, type});
    const ext = path.extname(filename);
    const logo = `${category._id}_${Date.now().toString()}${ext}`;

    try {
        await fs.rename(pathFile, path.join(categoriesDir, logo));
    } catch (e) {
        await fs.unlink(pathFile);
        throw new Error('Error move file');
    }

    category.logo = logo;
    await category.save();
    
    return category;
};

module.exports = addCategory;