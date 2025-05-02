const ProductRouter = require("express").Router();
const { productUploader } = require("../middleware/fileUploader");
const { verifyAdmin, verifyBoth } = require("../middleware/authentication");

const {
  createRecord,
  getRecord,
  getsingleRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/ProductController");

ProductRouter.post("", verifyAdmin, productUploader.array("pic"), createRecord);
ProductRouter.get("", getRecord);
ProductRouter.get("/:_id", getsingleRecord);
ProductRouter.put(
  "/:_id",
  verifyBoth,
  productUploader.array("pic"),
  updateRecord
);
ProductRouter.delete("/:_id", verifyAdmin, deleteRecord);

module.exports = ProductRouter;
