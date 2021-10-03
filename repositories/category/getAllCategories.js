const Category = require("../../model/categories/model");

const getAllCategories = async () => {
    return await Category.find({});
};

module.exports = getAllCategories;