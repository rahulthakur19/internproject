const express = require("express");
const {
  getDetails,
  createDetail,
  getDetailById,
  updateDetail,
  deleteDetail,
} = require("./controller");
 
const router = express.Router();
 
router.route("/").get(getDetails).post(createDetail);
// router.route("/:id").get(getDetailById).put(updateDetail).delete(deleteDetail);
 
module.exports = router;