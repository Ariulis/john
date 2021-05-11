const gulp = require("gulp");

const imageMinify = require("./imageMinify");
const svgSprite = require("./spriteSVG");
const pngSprite = require("./spritePNG");
const styles = require("./styles");
const startStyles = require("./startStyles");
const pug2html = require("./pug");
const script = require("./scripts");
const vendorsJS = require("./vendorsJS");

const server = require("browser-sync").create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: "docs",
    notify: false,
    open: true,
    cors: true,
  });

  gulp
    .watch(
      "dev/static/images/**/*.{gif,png,jpg,svg,webp}",
      gulp.series(imageMinify)
    )
    .on("change", server.reload);
  gulp
    .watch("dev/static/images/sprite/svg/*.svg", gulp.series(svgSprite))
    .on("change", server.reload);
  gulp
    .watch("dev/static/images/sprite/png/*.png", gulp.series(pngSprite))
    .on("change", server.reload);
  gulp
    .watch("dev/static/styles/**/*.scss", gulp.series(styles, startStyles))
    .on("change", server.reload);
  gulp
    .watch("dev/static/js/**/*.js", gulp.series(script, vendorsJS))
    .on("change", server.reload);
  gulp.watch("dev/pug/**/*.pug", gulp.series(pug2html));
  gulp.watch("docs/*.html").on("change", server.reload);

  return cb();
};
