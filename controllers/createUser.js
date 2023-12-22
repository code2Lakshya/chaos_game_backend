const User = require('../models/userSchema');

exports.createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            res
                .status(400)
                .json({
                    success: false,
                    message: 'User Exists',
                    userId: checkUser._id
                })
        }
        else {
            let createEntry;
            phone ?
             createEntry = await User.create({ name, email, phone })
             :
             createEntry= await User.create({ name, email })
            res
                .status(200)
                .json({
                    success: true,
                    message: 'User Successfully Added',
                    userId: createEntry._id
                })
        }
    }
    catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: `Internal Server Error ${error.message}`
            })
    }
}