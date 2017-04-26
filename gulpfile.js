var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var reload      = browserSync.reload;

var src = {
    sass: 'src/styles-sass/**/*.sass',
    scss: 'src/styles-scss/**/*.scss',
    css:  'dist/css',
    html: '*.html'
};

gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);