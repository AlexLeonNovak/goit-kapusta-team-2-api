const CategoryRepo = require('../../repositories/category')


const updateLogo = async (req, res) => {
    console.log(req.file);
    const {path: tempPath, filename, originalname} = req.file;
const { id } = req.params;
const result = await CategoryRepo.updateLogo(tempPath, filename, id, originalname);
console.log(result);
    return res.Created({result});

}

module.exports = updateLogo;
