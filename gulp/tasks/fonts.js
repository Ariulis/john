const gulp = require("gulp");

// Копируем все шрифты из папки dev в docs

module.exports = function fonts() {
  return gulp
    .src("dev/static/fonts/**/*.*")
    .pipe(gulp.dest("docs/static/fonts"));
};
