var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    // gulp.watch('archivo', ['tarea']);

    gulp.watch("app/js/*.js", ['compress']);
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("./*.html", ["minify"]);
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

gulp.task('minify', () => {
    return gulp.src('./*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('app'));
  });

gulp.task('compress', function (cb) {
    pump([
          gulp.src('app/js/*.js'),
          uglify(),
          gulp.dest('app/js/dist')
      ],
      cb
    );
  });

//  tarea independiente que se ejecuta de forma manual
  gulp.task('optimize', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'))
);