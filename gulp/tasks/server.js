const gulp   = require("gulp");
const server = require("browser-sync").create();
const config = require("../config");

gulp.task("server", function() {
  server.init({
    server: config.src.root,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(config.src.root + "/*.html").on("change", server.reload);
});

module.exports = server;
