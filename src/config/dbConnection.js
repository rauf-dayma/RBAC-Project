const mongoose = require("mongoose");

const dbConnect = async () => {

  const coonnectionString = `${process.env.CONNECTION_STRING}/${process.env.DB_NAME}`;
  const connect = await mongoose.connect(coonnectionString)

  const db = mongoose.connection;
  db.on("open", () => {
    console.log("db Connection successful");
  });

  db.on("error", () => {
    console.log("Connection is not successful");
  });
};

module.exports = dbConnect;
