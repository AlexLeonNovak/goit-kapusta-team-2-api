const Category = require("../../model/categories/model");

const getAllCategories = async (id) => {
    return await Category.find({user: id});
};

module.exports = getAllCategories;
