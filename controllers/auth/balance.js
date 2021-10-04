const UserRepo = require('../../repositories/user');
// const { User } = require('../../model/users/model');

const balance = async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const userInfo = await UserRepo.updateBalance(id, req.body, { new: true });
    //         console.log(userInfo);
    // 		// return res.OK({...userInfo});
    //         if (!userInfo) {
    //             return res.status(400).json({
    //                 "message": "Not found"
    //             })
    //         }
    //         res.json({
    //             userInfo
    //         })
    //     }
    //     catch(error){
    //         next(error)
    //     }
		
    // }
    const { email, password, balance } = req.body;
    const userInfo = await UserRepo.updateBalance(email, password, balance);
    return res.OK({ ...userInfo });
}
module.exports = balance;

// const updateContactById = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const update = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
//     // console.log(update);
//     if (!update) {
//       return res.status(400).json({
//         "message": "Not found"
//       })
//     }
//     res.json({
//       update
//     })
//   }
//   catch(error) {
//     next(error)
//   }
// }

// module.exports = updateContactById;