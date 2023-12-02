const { connect } = require("mongoose");

const connectDb = async () => {
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017";

  return connect(connectionString, mongooseOptions);
};

module.exports = { connectDb };
