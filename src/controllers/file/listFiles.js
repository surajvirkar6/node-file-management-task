const fs = require("fs");
const catchAsync = require("../../utils/catchAsync");

exports.listFiles = catchAsync(async (req, res, next) => {
  fs.readdir("./src/uploads", (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).json({
      status: true,
      files,
    });
  });
});
