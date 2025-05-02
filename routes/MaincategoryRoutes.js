const MaincategoryRouter = require("express").Router();
const { maincategoryUploader } = require("../middleware/fileUploader");
const { verifyAdmin } = require("../middleware/authentication");

const {
  createRecord,
  getRecord,
  getsingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/MaincategoryController");

MaincategoryRouter.post(
  "",
  verifyAdmin,
  maincategoryUploader.single("pic"),
  createRecord
);
MaincategoryRouter.get("", getRecord);
MaincategoryRouter.get("/:_id", getsingleRecord);
MaincategoryRouter.put(
  "/:_id",
  verifyAdmin,
  maincategoryUploader.single("pic"),
  updateRecord
);
MaincategoryRouter.delete("/:_id", verifyAdmin, deleteRecord);

module.exports = MaincategoryRouter;
