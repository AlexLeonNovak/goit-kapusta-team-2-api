const fs = require('fs/promises');
const { categoriesDir, tempDir} = require('../helpers/directories');

const checkDirectories = async () => {

	try {
		await fs.access(categoriesDir);
	} catch (e) {
		await fs.mkdir(categoriesDir, { recursive: true });
	}

	try {
		await fs.access(tempDir);
	} catch (e) {
		await fs.mkdir(tempDir);
	}
}

module.exports = checkDirectories;
