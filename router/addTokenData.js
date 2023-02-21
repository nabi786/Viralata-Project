const express = require("express");
const router = require("express").Router();

const tokenDataObbj = require("../controller/addTokenData");

router.post("/addTokenData", tokenDataObbj.postData);

module.exports = router;
