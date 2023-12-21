const Output=require('../models/outputSchema');


exports.addUrl=async(req,res)=>{
    try{
        const {url,output}=req.body;
        const addedEntry=await Output.findOneAndUpdate(
            {_id: output},
            {url_generated: true,url},
            {new: true}
            );
            res
            .status(200)
            .json({
                success: true,
                message: 'Added Url',
                response: addedEntry
            })
    }catch(error){
        res
        .status(500)
        .json({
            success: false,
            message: `Internal Server Error ${error.message}`
        })
    }
}