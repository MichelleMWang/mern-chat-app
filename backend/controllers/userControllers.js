const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//get all the users with the role tutor applicant and send it to the frontend
const getApplications = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? { 
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ role: "tutor applicant" });
  console.log("users in userControllers: ", users); 
  res.json(users);
});




//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      role: user.role, 
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const registerStudent = asyncHandler(async (req, res) => {
  console.log("in regi")
  const { name, email, password, pic, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      role: "student", 
      tutors: [], 
      subjects: [], 
      languages: [], 
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const registerTutor = asyncHandler(async (req, res) => {
  const { name, email, password, pic, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      role: "tutor applicant", 
      students: [], 
      subjects: [], 
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  } 
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, pic, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: true,
      pic: user.pic,
      role: "admin", 
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Admin not found");
  } 
});

const updateTutorRole = asyncHandler(async (req, res) => {
  console.log("in updateTutorRole"); 
  const id = req.body.id;
  console.log("id: " + id); 
  const result = await User.updateOne({ _id: id }, { $set: { role: 'tutor' } });
  console.log("result: " + JSON.stringify(result)); 
  if (result.nModified === 1) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
}); 

const updateDeniedRole = asyncHandler(async (req, res) => {
  console.log("in updateTutorRole"); 
  const id = req.body.id;
  console.log("id: " + id); 
  const result = await User.updateOne({ _id: id }, { $set: { role: 'tutor' } });
  console.log("result: " + JSON.stringify(result)); 
  if (result.nModified === 1) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
}); 


module.exports = { allUsers, getApplications, authUser, registerStudent, registerTutor, registerAdmin, updateTutorRole, updateDeniedRole };
