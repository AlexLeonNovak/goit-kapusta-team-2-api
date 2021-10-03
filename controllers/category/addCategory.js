const CategoryRepo = require('../../repositories/category')
const formidable = require('formidable');

const addCategory = async (req, res) => {
    const form = formidable();
    const {fields, file} = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, file) => {
            if (err) {
                reject(err);
            }
            resolve({fields, file});
        })
    })
    console.log(fields)
    const  {name, type} = fields;
    
    const result = await CategoryRepo.addCategory(name, type, file);
    return res.Created({result});


}

module.exports = addCategory;
