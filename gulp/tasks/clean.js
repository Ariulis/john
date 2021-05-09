const del = require("del");

// Полностью удаляем папку docs

module.exports = function clean(cb) {
  return del("docs").then(() => {
    cb();
  });
};
