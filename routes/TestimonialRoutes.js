const TestimonialRouter = require("express").Router();
const { testimonialUploader } = require("../middleware/fileUploader");
const { verifyAdmin } = require("../middleware/authentication");

const {
  createRecord,
  getRecord,
  getsingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/TestimonialController");

TestimonialRouter.post(
  "",
  verifyAdmin,
  testimonialUploader.single("pic"),
  createRecord
);
TestimonialRouter.get("", getRecord);
TestimonialRouter.get("/:_id", getsingleRecord);
TestimonialRouter.put(
  "/:_id",
  verifyAdmin,
  testimonialUploader.single("pic"),
  updateRecord
);
TestimonialRouter.delete("/:_id", verifyAdmin, deleteRecord);

module.exports = TestimonialRouter;
