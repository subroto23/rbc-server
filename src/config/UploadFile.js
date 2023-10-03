const multer = require("multer");
const { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } = require("../secret");

const storage = multer.memoryStorage();

const fileFilter = (req, res, cb) => {
  if (!file.mimetype.startswith("image/")) {
    return cb(new Error("Only Image File Allowed"), false);
  }
  if (file.size > MAX_FILE_SIZE) {
    return cb(new Error("File Size Too learge"), false);
  }
  if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    return cb(new Error("File type not allowed"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
