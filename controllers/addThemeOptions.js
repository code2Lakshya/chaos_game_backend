const Output = require('../models/outputSchema');

exports.addThemeOptions = async (req, res) => {
    try {
        const { main_character, game_background, top_obstacle, bottom_obstacle, output } = req.body;
        const addedUpdatedTheme = await Output.findOneAndUpdate(
            { _id: output },
            { main_character, game_background, top_obstacle, bottom_obstacle }
        );
        const updatedOutput = await Output.findOne({ _id: output })
            .populate('userId')
            .exec();
        res
            .status(200)
            .json({
                success: true,
                message: 'Added Theme Options',
                response: updatedOutput
            })
    }
    catch (eror) {
        res
            .status(500)
            .json({
                success: false,
                message: `Internal Server Error ${error.message}`
            })
    }
}