var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
/* var uglify = require('gulp-uglify');
var pump = require('pump'); */

const terser = require('gulp-terser');

var cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');


// Static Server + watching scss/html files
gulp.task('default', ['sass', 'javascript','html'], function () {

  browserSync.init({
    server: "./app"
  });

  // gulp.watch('archivo', ['tarea']);
  gulp.watch("app/js/*.js", ['javascript']).on('change', browserSync.reload);
  gulp.watch("scss/*.scss", ['sass']).on('change', browserSync.reload);
  gulp.watch("./*.html", ["html"]);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('app'));
});

gulp.task('javascript', function (/* cb */) {
  /* pump([
    gulp.src('./app/js/*.js'),
    uglify(),
    gulp.dest('app/js/dist')
  ],
    cb
  ); */
  return gulp.src('./app/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('app/js/dist'));

});

//  tarea independiente que se ejecuta de forma manual
gulp.task('images', function () {
  return gulp.src('./app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img'))
});