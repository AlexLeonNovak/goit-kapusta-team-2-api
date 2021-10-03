const Category = require("../../model/categories/model");

const getAllCategories = async (__, res, next) => {
  try {
    const categories = await Category.find({});

    res.json({
      status: "success",
      code: 200,
      data: {
        result: categories,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllCategories;
