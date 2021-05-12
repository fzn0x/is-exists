module.exports = (name) => {
  if (
    typeof global[name] !== "undefined" &&
    typeof global[name] === "function"
  ) {
    return true;
  } else {
    return false;
  }
};
