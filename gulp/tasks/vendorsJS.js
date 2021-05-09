const gulp = require("gulp");
const concat = require("gulp-concat");

const vendorsScripts = [
  // "node_modules/jquery/docs/jquery.min.js",
  // "node_modules/svg4everybody/docs/svg4everybody.min.js",
  // "node_modules/nouislider/docsribute/nouislider.min.js",
  // "node_modules/swiper/swiper-bundle.min.js",
  // "node_modules/fslightbox/index.js",
  // "node_modules/inputmask/docs/inputmask.min.js",
  // "node_modules/just-validate/docs/js/just-validate.min.js",
  // "node_modules/smooth-scrollbar/docs/smooth-scrollbar.js",
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp
        .src(vendorsScripts)
        .pipe(concat("libs.js"))
        .pipe(gulp.dest("docs/static/js/"))
    : cb();
};
