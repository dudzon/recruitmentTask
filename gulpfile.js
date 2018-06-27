'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function(){

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    var processors = [
        autoprefixer({ browsers: ['last 2 versions']})
    ];
    return gulp.src("app/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(postcss(processors))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve',]);

