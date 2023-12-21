const Output=require('../models/outputSchema');


exports.increaseRetry=async(req,res)=>{
    try{
        const {count,output}=req.body;
        const increaseCountEntry=await Output.findOneAndUpdate(
            {_id:output},
            {$inc: {retryCount: count}},
            {new: true});
            res
            .status(200)
            .json({
                success: true,
                message: 'Count Increased',
                response: increaseCountEntry
            })
    }
    catch(error){
        res
        .status(500)
        .json({
            success: false,
            message: `Internal Server Error ${error.message}`
        })
    }
}