const WishlistRouter = require("express").Router();
const { verifyBoth } = require("../middleware/authentication");

const {
  createRecord,
  getRecord,
  getsingleRecord,
  deleteRecord,
} = require("../controllers/WishlistController");

WishlistRouter.post("", verifyBoth, createRecord);
WishlistRouter.get("/:userid", verifyBoth, getRecord);
WishlistRouter.get("/single/:_id", verifyBoth, getsingleRecord);
WishlistRouter.delete("/:_id", verifyBoth, deleteRecord);

module.exports = WishlistRouter;
