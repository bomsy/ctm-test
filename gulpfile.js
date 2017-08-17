var gulp = require("gulp");
var concat = require("gulp-concat");
var concatStyles = require("gulp-concat");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("js", function() {
  return browserify({
    entries: "./src/app.js",
    extensions: [".js"],
    paths: ["./src/"]
  })
    .transform(babelify, {
      plugins: ["transform-regenerator"],
      presets: ["env", "react"]
    })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("css", function() {
  return gulp
    .src("./src/*.css")
    .pipe(concatStyles("bundle.css"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build", ["js", "css"]);
