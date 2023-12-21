const User=require('../models/userSchema');

exports.getUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const checkUser=await User.findOne({_id:id});
        if(!checkUser){
            res
            .status(400)
            .json({
                success: false,
                message: 'User Does not exist'
            })
        }
        else{
            res
            .status(200)
            .json({
                success: true,
                message: 'User Found',
                response: checkUser
            })
        }
    }
    catch(error){
        res
        .status(500)
        .json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}