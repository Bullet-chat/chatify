const express = require("express");
const { talkWithAi } = require("../controllers/aiControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.route("/").post(protect, talkWithAi);

module.exports = router;