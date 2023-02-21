const mongoose = require("mongoose");

// creating tokenData Model
const Schema = new mongoose.Schema({
  tokenAddres: {
    type: String,
    required: true,
  },
  tokenName: {
    type: String,
    required: true,
  },
  Symbol: {
    type: String,
    required: true,
  },
  Balance: {
    type: String,
    required: true,
  },
  Decimals: {
    type: String,
    required: true,
  },
  Logo: {
    type: String,
    required: true,
  },
});

const tokenSchema = mongoose.model("tokens", Schema);

const modal = {
  tokenSchema,
};

module.exports = modal;
