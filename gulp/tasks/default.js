const gulp         = require("gulp");
const gulpSequence = require("gulp-sequence");
const config       = require("../config");

gulp.task("default", function(cb) {
    gulpSequence(
        "build:dev",
        "watch",
        "server",
        cb
    );
});
