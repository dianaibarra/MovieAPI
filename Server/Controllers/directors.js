const express = require('express');
const router = express.Router();

const { Directors } = require("../models/directors.js")

router.post("add/", (req,res) => {
    const { name } = req
})

module.exports = router;