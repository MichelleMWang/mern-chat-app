const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  selectUserType, 
  registerStudent, 
  registerTutor,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
//router.post("/").post(selectUserType); 
router.route("/").post(registerStudent);
//router.route("/tutor").post(registerTutor);
router.post("/login", authUser);

module.exports = router;
