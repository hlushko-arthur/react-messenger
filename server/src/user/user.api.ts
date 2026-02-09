import express from "express";
const router = express.Router();
const User = require("./user.collection");

router.get("/get", async (req, res) => {
	res.json({test: 123});
});

module.exports = router;