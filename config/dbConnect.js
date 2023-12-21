const mongoose=require('mongoose');

require('dotenv').config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DB)
    .then((response)=>{
        console.log('DB Connect Success');
    })
    .catch(error=>{
        console.log('DB Connect Failure',error.message);
        process.exit(1);
    })
}