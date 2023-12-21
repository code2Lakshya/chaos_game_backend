const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    outputs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Output'
    }]
})

module.exports=mongoose.model('User',userSchema);