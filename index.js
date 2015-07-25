module.exports = function (loc, _require) {
  try {
    return (_require || require).resolve(loc);
  } catch (err) {
    return null;
  }
};
