const gulp = require("gulp");
const uglify = require("gulp-uglify");
const argv = require("yargs").argv;
const gulpif = require("gulp-if");

// Работа со скриптами

module.exports = function script() {
  return gulp
    .src("dev/static/js/main.js")
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest("docs/static/js/"));
};
