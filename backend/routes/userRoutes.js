const express = require("express");
const {
  authUser,
  allUsers,
  registerStudent, 
  registerTutor,
  registerAdmin,
  getApplications, 
  updateTutorRole, 
  updateDeniedRole
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/student").post(registerStudent);
router.route("/tutor").post(registerTutor);
router.route("/admin").post(registerAdmin); 
router.post("/login", authUser);
//router.route("/applications").post(getApplications); 
//make a route that fetches all the users with the role of tutor applicant
router.route("/applications").get(getApplications);
router.route("/update-tutor-role").post(updateTutorRole); 
router.route("/update-denied-role").post(updateDeniedRole);

module.exports = router;
