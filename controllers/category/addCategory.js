const CategoryRepo = require("../../repositories/category");

const addCategory = async (req, res) => {
  const { path: tempPath, filename } = req.file;
  const { name, type } = req.body;
  const result = await CategoryRepo.addCategory(name, type, tempPath, filename);
  return res.Created({ result });
};

module.exports = addCategory;
