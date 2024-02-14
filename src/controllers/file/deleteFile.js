const fs = require("fs");
const catchAsync = require("../../utils/catchAsync");

exports.deleteFile = catchAsync(async (req, res, next) => {
  const filename = req.params.filename;
  fs.unlink(`./src/uploads/${filename}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res
      .status(200)
      .json({ status: true, message: "File deleted successfully" });
  });
});
