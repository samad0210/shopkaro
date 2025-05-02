const BrandRouter = require("express").Router();
const { brandUploader } = require("../middleware/fileUploader");
const { verifyAdmin } = require("../middleware/authentication");

const {
  createRecord,
  getRecord,
  getsingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/BrandController");

BrandRouter.post("", verifyAdmin, brandUploader.single("pic"), createRecord);
BrandRouter.get("", getRecord);
BrandRouter.get("/:_id", getsingleRecord);
BrandRouter.put(
  "/:_id",
  verifyAdmin,
  brandUploader.single("pic"),
  updateRecord
);
BrandRouter.delete("/:_id", verifyAdmin, deleteRecord);

module.exports = BrandRouter;
