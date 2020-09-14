const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads/");
  },
  filename: (req, file, callback) => {
    const fileNameArray = file.originalname.split(".");
    const newFileName = `${fileNameArray[0]}_${Date.now()}.${fileNameArray[1]}`;
    callback(null, newFileName);
  },
});

module.exports = multer({ storage: storage });
