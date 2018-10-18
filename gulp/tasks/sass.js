const gulp         = require("gulp");
const autoprefixer = require("autoprefixer");
const csso         = require("gulp-csso");
const mqpacker     = require("css-mqpacker");
const plumber      = require("gulp-plumber");
const postcss      = require("gulp-postcss");
const rename       = require("gulp-rename");
const sass         = require("gulp-sass");
const sourcemaps   = require("gulp-sourcemaps");
const config       = require("../config");
const server       = require("./server");

const processors = [
    autoprefixer({
        browsers: ["last 2 versions"]
    }),
    mqpacker({
        sort: false
    })
];

gulp.task("sass", function() {
    return gulp
        .src(config.src.sass + "/style.scss")
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(config.dest.css))
});

gulp.task("sass:dev", function() {
    return gulp
        .src(config.src.sass + "/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(gulp.dest(
          config.production ? config.dest.css : config.src.css
        ))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(
          config.production ? config.dest.css : config.src.css))
        .pipe(server.stream())
});

gulp.task("style:watch", function () {
  gulp.watch(config.src.sass + "/**/*.{scss,sass}", ["sass:dev"]);
});
