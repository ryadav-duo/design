const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const jsmin = require('gulp-jsmin')
const rename = require('gulp-rename')


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


gulp.task('scripts', () => (
    gulp.src('assets/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
))


gulp.task('images', () => (
    gulp.src('assets/images/*.*')
        .pipe(gulp.dest('dist/images'))
<<<<<<< HEAD
))

gulp.task('fonts', () => (
    gulp.src('fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
))


gulp.task('build', ['pages', 'styles', 'scripts', 'images', 'fonts'])
=======
))


gulp.task('build', ['pages', 'styles', 'scripts', 'images'])
>>>>>>> c71461f3a3b7a5912ef9055e85fa804bec707a7c


gulp.task('watch', ['build'], () => {
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
    })
})
