const gulp   = require("gulp");
const del    = require("del");
const color  = require("ansi-colors");
const log    = require("fancy-log");
const config = require("../config");

gulp.task("clean", function(cb) {
    return del([
        config.dest.root,
        ".publish/"
    ]).then(function(paths) {
        log("Deleted:", color.magenta(paths.join("\n")));
    });
});
