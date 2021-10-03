const Category = require("../../model/categories/model");

const getAllCategories = async (res, next) => {
  try {
    const categories = await Category.find({});

    res.OK({...categories})
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCategories;