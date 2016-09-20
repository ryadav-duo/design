const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const jsmin = require('gulp-jsmin')
const rename = require('gulp-rename')

const json = require('./scripts/render_json')
const page = require('./scripts/render_page')


gulp.task('pages', () => (
    gulp.src('assets/templates/*.html')
        .pipe(page('assets/templates'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true,
        }))
        .pipe(gulp.dest('dist'))
))


gulp.task('styles', () => (
    gulp.src('assets/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream())
))

gulp.task('referenceFiles', () => {
  gulp.src('assets/styles/**/*.css')
      .pipe(gulp.dest('dist/styles'))
      .pipe(browserSync.stream())
  gulp.src('assets/js/reference/**/**/*.js')
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/js'))
})

gulp.task('scripts', () => (
    gulp.src('assets/js/general.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
))


gulp.task('images', () => (
    gulp.src('assets/images/*')
        .pipe(gulp.dest('dist/images'))
))

gulp.task('fonts', () => (
    gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
))

gulp.task('json', () => (
  gulp.src('assets/json/*.json')
    .pipe(json('assets/json/'))
    .pipe(gulp.dest('dist/json'))
))

gulp.task('build', ['pages', 'json', 'styles', 'scripts', 'images', 'fonts', 'referenceFiles'])

gulp.task('refresh', ['pages', 'styles', 'scripts'])


gulp.task('watch', ['refresh'], () => {
    gulp.watch([
        'assets/pages/**/*.md',
        'assets/templates/**/*.html',
    ], ['pages']).on('change', browserSync.reload)

    gulp.watch('assets/styles/**/*.scss', ['styles'])
    gulp.watch('assets/js/**/*.js', ['scripts'])

    browserSync.init({
        server: {
            baseDir: 'dist',
        },
        open: false,
    })
})
