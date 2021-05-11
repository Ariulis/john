const gulp = require("gulp");
const plumber = require("gulp-plumber");
const scss = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

module.exports = function startStyles() {
  return gulp
    .src("dev/static/styles/utils/start.scss")
    .pipe(plumber())
    .pipe(scss())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 4 version"],
        cascade: false,
      })
    )
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: "*",
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(gulp.dest("dev/static/styles/utils"));
};
