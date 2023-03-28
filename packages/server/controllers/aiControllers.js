const asyncHandler = require("express-async-handler");

const talkWithAi = asyncHandler(async (req, res) => {
  console.log(req, res);
  return;
});

module.exports = { talkWithAi };
