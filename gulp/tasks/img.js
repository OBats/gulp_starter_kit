const gulp     = require("gulp");
const imagemin = require("gulp-imagemin");
const rename   = require("gulp-rename");
const svgmin   = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const rsp      = require('remove-svg-properties').stream;
const config   = require("../config");

gulp.task("imagemin", function () {
  return gulp.src(config.dest.img + "/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest(config.dest.img))
});

gulp.task("svg", function () {
  return gulp.src(config.src.iconsSvg + "/*.svg")
    .pipe(rsp.remove({
      properties: [rsp.PROPS_FILL],
      log: false
    }))
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest(
      config.production ? config.dest.img + "/icons" : config.src.icons))
})
