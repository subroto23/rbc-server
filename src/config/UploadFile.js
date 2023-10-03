const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, res, cb) => {
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
