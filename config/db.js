const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/buenotechapp',{
// console.log(process.env.dataBase)
// var db = process.env.dataBase;
var db = `mongodb://localhost:27017/viralat`;
mongoose.set("strictQuery", false);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });
