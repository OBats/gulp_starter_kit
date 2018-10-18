const gulp         = require("gulp");
const gulpSequence = require("gulp-sequence");
const config       = require("../config");

function build(cb) {
    gulpSequence(
        "clean",
        config.production ? "sass" : "sass:dev",
        "js-uglify",
        config.production ? "copy" : "",
        config.production ? "imagemin" : "",
        "svg",
        cb
    );
}

gulp.task("build", function(cb) {
    config.setEnv("production");
    config.logEnv();
    build(cb);
});

gulp.task("build:dev", function(cb) {
    config.setEnv("development");
    config.logEnv();
    build(cb);
});
