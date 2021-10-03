const CategoryRepo = require('../../repositories/category')

const addCategory = async (req, res) => {
    const  {name, type, logo} = req.body;
    const result = await CategoryRepo.addCategory(name, type, logo);
    return res.Created({result});


}

module.exports = addCategory;
