const Subcategory = require("../models/Subcategory")
const fs = require("fs")

async function createRecord(req,res) {
  try {
    let data = new Subcategory(req.body)
    if(req.file){
        data.pic=req.file.path
    }
    await data.save()
    res.send({
     result:"done",
     data:data
    })
  } catch (error) {
   try {
    fs.unlinkSync(req.file.path)
   } catch (error) {}
    
    let errorMessage={}
    error.keyValue?errorMessage.name="Subcategory With Same Name Already Exists":null
    error.errors?.name?errorMessage.name=error.errors.name.message:null
    error.errors?.pic?errorMessage.pic=error.errors.pic.message:null
    if(Object.values(errorMessage).length===0){
        res.status(500).send({
            result:"fail",
            reason:"Internal server error"
        })
    }
    else{
        res.status(400).send({
            result:"fail",
            reason:errorMessage
        })
    }
    
  }
}

async function getRecord(req,res) {
  try {
    let data = await Subcategory.find().sort({_id:-1})
    res.send({
     result:"done",
     length:data.length,
     data:data
    })
  } catch (error) {
    res.status(500).send({
        result:"fail",
        reason:"Internal server error"
    })
  }
}

async function getsingleRecord(req,res) {
    try {
      let data = await Subcategory.findOne({_id:req.params._id})
     if(data){
        res.send({
            result:"done", 
            data:data
           })
     }
     else{
        res.status(500).send({
            Result:"Fail", 
            Reason:"Record not found"
           })
     }
    } catch (error) {
      res.status(500).send({
          result:"fail",
          reason:"Internal server error"
      })
    }
  }

  async function updateRecord(req,res) {
    try {
      let data = await Subcategory.findOne({_id:req.params._id})
     if(data){
        data.name = req.body.name??data.name
        data.active = req.body.active??data.active
        if(await data.save() && req.file){
           try {
            fs.unlinkSync(data.pic)

           } catch (error) {}
           data.pic = req.file.path
           await data.save()
        }
        res.send({
            result:"done", 
            data:data
           })
     }
     else{
        res.status(500).send({
            Result:"Fail", 
            Reason:"Record not found"
           })
     }
    } catch (error) {
        try {
            fs.unlinkSync(req.file.path)
           } catch (error) {}
            
            let errorMessage={}
            error.keyValue?errorMessage.name="Subcategory With Same Name Already Exists":null
            if(Object.values(errorMessage).length===0){
                res.status(500).send({
                    result:"fail",
                    reason:"Internal server error"
                })
            }
            else{
                res.status(400).send({
                    result:"fail",
                    reason:errorMessage
                })
            }
            
          }
  }


  async function deleteRecord(req,res) {
    try {
      let data = await Subcategory.findOne({_id:req.params._id})
     if(data){
        try {
           fs.unlinkSync(data.pic) 
        } catch (error) {}
        await data.deleteOne()
        res.send({
            result:"done", 
            data:data
           })
     }
     
     else{
        res.status(500).send({
            Result:"Fail", 
            Reason:"Record not found"
           })
     }
    } catch (error) {
      res.status(500).send({
          result:"fail",
          reason:"Internal server error"
      })
    }
  }

module.exports={
  createRecord:createRecord,
  getRecord:getRecord,
  getsingleRecord:getsingleRecord,
  updateRecord:updateRecord,
  deleteRecord:deleteRecord
}