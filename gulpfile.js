var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('scss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function () {
    return gulp
        .src(['./src/*.html'])
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
    })
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', gulp.parallel(['scss']));
    gulp.watch('./src/**/*.ts', gulp.parallel(['ts']));
    gulp.watch('./src/**/*.html', gulp.parallel(['html']));
});

gulp.task('run-tasks', gulp.parallel('html', 'watch', 'browserSync'))