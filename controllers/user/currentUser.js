const currentUser = async (req, res) => {
    const { user } = req;
    return res.OK({ user });
}
module.exports = currentUser;
