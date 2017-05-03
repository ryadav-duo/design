const cssnano = require('cssnano')
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')


gulp.task('styles', () => (
    gulp.src('assets/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'))
))

gulp.task('referenceFiles', () => {
    gulp.src('assets/styles/**/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'))
  // gulp.src('assets/js/reference/**/**/*.js')
  //     .pipe(jsmin())
  //     .pipe(rename({suffix: '.min'}))
  //     .pipe(gulp.dest('dist/js'))
})

// gulp.task('scripts', () => (
//     gulp.src('assets/js/general.js')
//         .pipe(jsmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist/js'))
// ))


gulp.task('images', () => (
    gulp.src('assets/images/*')
        .pipe(gulp.dest('dist/images'))
))

gulp.task('fonts', () => (
    gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
))


gulp.task('build', ['styles', 'images', 'fonts', 'referenceFiles'])

gulp.task('refresh', ['styles', 'images'])
