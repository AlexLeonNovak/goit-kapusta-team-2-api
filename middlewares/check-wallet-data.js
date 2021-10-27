module.exports = (req, res, next) => {

    try{
        if (!req.body.balance) {
            throw new Error();;
          }
           return next();
    }
    catch(err){
        next(res.NoContent());
    }
}