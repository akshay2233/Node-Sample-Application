const path = require("path");

const registerEmployee = (req, res, next) => {
  res.sendFile(path.join(__dirname, "pages", "register.html"));
  
};

module.exports = { registerEmployee };
