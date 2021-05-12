module.exports = (name) => {
  if (typeof global[name] !== "undefined") {
    return true;
  } else {
    return false;
  }
};
