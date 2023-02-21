const modal = require("../model/model");

// ================================
//
//
//  POST TOKEN DATA
//
//
// ================================

// post token in databse
const postData = async (req, res) => {
  try {
    // token data Modal object
    var token = await new modal.tokenSchema({
      tokenAddres: req.body.tokenAddres,
      tokenName: req.body.tokenName,
      Symbol: req.body.Symbol,
      Balance: req.body.Balance,
      Decimals: req.body.Decimals,
      Logo: req.body.Logo,
    });

    await token.save();
    res.status(200).json({ success: true, msg: "tokenAdded Successfully" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "something went wrong" });
  }
};

// exporting functions
var tokenDataObbj = {
  postData,
};

module.exports = tokenDataObbj;
