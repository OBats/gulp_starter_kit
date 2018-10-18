const gulp   = require("gulp");
const config = require("../config");

gulp.task("watch", [
    "copy:watch",
    "style:watch",
    "js-uglify:watch"
]);
