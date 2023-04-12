const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    initial(); 
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

const Role = require("../models/roleModel")

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "student"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'student' to roles collection");
      });

      new Role({
        name: "tutor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'tutor' to roles collection");
      });

      new Role({
        name: "tutor applicant"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'tutor applicant' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

module.exports = connectDB;
