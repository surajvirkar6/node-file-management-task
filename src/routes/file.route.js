const express = require("express");
const fileController = require("../controllers/file/index");
const upload = require("../middlewares/multer");
const rateLimiterMiddleware = require("../middlewares/rateLimiter");

const router = express.Router();

router.get("/list", fileController.listFiles.listFiles);

router.post(
  "/upload",
  rateLimiterMiddleware,
  upload.any(),
  fileController.uploadFile.uploadFile
);

router.delete("/delete/:filename", fileController.deleteFile.deleteFile);

module.exports = router;
