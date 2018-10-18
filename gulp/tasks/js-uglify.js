const gulp     = require("gulp");
const babel    = require('gulp-babel');
const jsUglify = require("gulp-uglify");
const pump     = require("pump");
const config   = require("../config");
const server   = require("./server");

gulp.task("js-uglify", function (cb) {
  pump([
        gulp.src(config.src.uglyJs + "/**/*.js"),
        babel({
          presets: ['env']
        }),
        jsUglify(),
        gulp.dest(
          config.production ? config.dest.js : config.src.js
        ),
        server.stream()
    ],
    cb
  );
});

gulp.task("js-uglify:watch", function () {
  gulp.watch(config.src.uglyJs + "/**/*.js", ["js-uglify"]);
})
