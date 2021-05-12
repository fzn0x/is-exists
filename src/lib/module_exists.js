module.exports = (name) => {
  try {
    // check if module exist without loading the module
    require.resolve(name);
    return true;
  } catch (e) {
    return false;
  }
};
