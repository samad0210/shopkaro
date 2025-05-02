const Newsletter = require("../models/Newsletter");

async function createRecord(req, res) {
  try {
    let data = new Newsletter(req.body);
    await data.save();
       res.send({
      result: "Done",
      data: data,
      message:"Thanks For Subscribing To Our Newsletter"
    });
  } catch (error) {
    let errorMessage = {};
    error.keyValue? errorMessage.email = "your Email Address is Already Registered With Us":null
    error.errors?.email
      ? (errorMessage.email = error.errors.email.message)
      : null;
   

    if (Object.values(errorMessage).length === 0) {
      res.status(500).send({
        result: "fail",
        reason: "Internal server error",
      });
    } else {
      res.status(400).send({
        result: "Fail",
        reason: errorMessage,
      });
    }
  }
}

async function getRecord(req, res) {
  try {
    let data = await Newsletter.find().sort({ _id: -1 })
      //  .populate("maincategory",["name"])
      //  .populate("subcategory",["name"])
      //  .populate("brand",["name"])

    res.send({
      result: "Done",
      length: data.length,
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal server error",
    });
  }
}

async function getsingleRecord(req, res) {
  try {
    let data = await Newsletter.findOne({ _id: req.params._id })
    
    if (data) {
      res.send({
        result: "Done",
        data: data,
      });
    } else {
      res.status(500).send({
        Result: "Fail",
        Reason: "Record not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal server error",
    });
  }
}

async function updateRecord(req, res) {
  try {
    let data = await Newsletter.findOne({ _id: req.params._id });
    if (data) {
      data.active = req.body.active ?? data.active;
      
      await data.save();

      res.send({
        result: "Done",
        data: data,
      });
    } else {
      res.status(500).send({
        Result: "Fail",
        Reason: "Record not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal server error",
    });
  }
}

async function deleteRecord(req, res) {
  try {
    let data = await Newsletter.findOne({ _id: req.params._id });
    if (data) {
      await data.deleteOne();
      res.send({
        result: "Done",
        data: data,
      });
    } else {
      res.status(500).send({
        Result: "Fail",
        Reason: "Record not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      result: "Fail",
      reason: "Internal server error",
    });
  }
}

module.exports = {
  createRecord: createRecord,
  getRecord: getRecord,
  getsingleRecord: getsingleRecord,
  updateRecord: updateRecord,
  deleteRecord: deleteRecord,
};
