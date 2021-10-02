const path = require('path');

const {UPLOAD_DIR, TEMP_DIR, CATEGORIES_DIR} = process.env;

const uploadDir = path.join(process.cwd(), UPLOAD_DIR);
const categoriesDir = path.join(uploadDir, CATEGORIES_DIR);
const tempDir = path.join(process.cwd(), TEMP_DIR);

module.exports = {
	uploadDir,
	categoriesDir,
	tempDir
};
