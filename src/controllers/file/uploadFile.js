const catchAsync = require("../../utils/catchAsync");

exports.uploadFile = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "File uploded successfully",
  });
});
