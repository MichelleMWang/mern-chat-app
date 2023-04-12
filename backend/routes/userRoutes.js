const express = require("express");
const {
  authUser,
  allUsers,
  registerStudent, 
  registerTutor,
  registerAdmin,
  getApplications
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get( allUsers);
router.route("/student").post(registerStudent);
router.route("/tutor").post(registerTutor);
router.route("/admin").post(registerAdmin); 
router.post("/login", authUser);
router.route("/applications").get(getApplications); 

module.exports = router;
