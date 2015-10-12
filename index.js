var Module = require("module");

var resolve = module.exports = function (loc, _require) {
  try {
    return (_require || require).resolve(loc);
  } catch (err) {
    return null;
  }
};

var relativeMod;

// allow user to set module path outside
resolve.relativePath = process.cwd();

resolve.relative = function (loc, relativePath) {
  // we're in the browser, probably
  if (typeof Module === "object") return null;

  if (!relativeMod) {
    relativeMod = new Module;
    relativeMod.paths = Module._nodeModulePaths(relativePath || resolve.relativePath);
  }

  try {
    return Module._resolveFilename(loc, relativeMod);
  } catch (err) {
    return null;
  }
};
