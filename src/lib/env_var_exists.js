module.exports = (env_var) => {
  // How can I check [if] an [env var] is set [in] [process.env]?
  // in operator also implemented in many old versions of the JS-Engines https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf#sec-11.8.7
  if (env_var in process.env) return true;
  return false;
};
