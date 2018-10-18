const gulp    = require("gulp");
const ghPages = require("gulp-gh-pages");
const config  = require("../config");

gulp.task("deploy", ["build"], function() {
  return gulp.src(config.dest.root + "/**/*")
    .pipe(ghPages())
});
