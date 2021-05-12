const fs = require("fs");

module.exports = async (filepath) => {
  return fs.promises
    .access(filepath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};
