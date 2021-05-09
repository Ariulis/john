const gulp = require("gulp");
const htmlValidator = require("gulp-w3c-html-validator");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const argv = require("yargs").argv;
const gulpif = require("gulp-if");
const fs = require("fs");

// Преобразуем Pug в HTML

module.exports = function pug2html() {
  return gulp
    .src("dev/pug/*.pug")
    .pipe(plumber())
    .pipe(
      pug({
        locals: {
          nav: JSON.parse(fs.readFileSync("./data/nav.json", "utf-8")),
          content: JSON.parse(fs.readFileSync("./data/content.json", "utf-8")),
        },
        pretty: true,
      })
    )
    .pipe(plumber.stop())
    .pipe(gulpif(argv.prod, htmlValidator()))
    .pipe(gulp.dest("docs"));
};
