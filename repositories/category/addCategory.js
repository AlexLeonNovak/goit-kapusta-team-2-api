const Category = require('../../model/categories/model');
const ErrorException = require('../../exceptions/error.exception');

const addCategory = async (name, type, logo) => {
	const category = new Category({name, type, logo});
   await category.save();
   return category
};

module.exports = addCategory;