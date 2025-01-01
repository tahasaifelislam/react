const express = require("express");
const { getAllSandwiches, createSandwich } = require("../controllers/sandwichController");

const router = express.Router();

router.get("/", getAllSandwiches);
router.post("/", createSandwich);

module.exports = router;
