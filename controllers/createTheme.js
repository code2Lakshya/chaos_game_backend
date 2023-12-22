const User = require('../models/userSchema');
const Output = require('../models/outputSchema');


exports.createTheme = async (req, res) => {
    try {
        const { theme, user } = req.body;
        const createOutput = await Output.create({ theme: theme, userId: user });
        const addOutput = await User.findOneAndUpdate(
            { _id: user },
            { $push: { outputs: createOutput._id } },
            { new: true }
        );
        res
        .status(200)
        .json({
            success: true,
            message: 'Added Output',
            outputId: createOutput._id
        })
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