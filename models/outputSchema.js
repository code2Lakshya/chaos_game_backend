const mongoose=require('mongoose');

const outputSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    theme:{
        type: String,
        required: true
    },
    main_character: {
        type: String
    },
    game_background:{
        type: String
    },
    top_obstacle: {
        type: String
    },
    bottom_obstacle:{
        type: String
    },
    retryCount:{
        type: Number,
        default:0
    },
    url_generated:{
        type: Boolean,
        default: false
    },
    url:{
        type: String
    }
})

module.exports=mongoose.model('Output',outputSchema);