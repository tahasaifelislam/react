const express = require("express");
const { getAllCommands, createCommand } = require("../controllers/commandController");

const router = express.Router();

router.get("/", getAllCommands);
router.post("/", createCommand);

module.exports = router;
