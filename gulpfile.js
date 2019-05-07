'use strict';

const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');

const path = {
    src: {
        style: 'src/base.scss',
    },
    watch: {
        style: 'src/*.scss',
    },
    build: {
        css: 'web/',
    },
    clean: './web'
};

function clean() {
    return del([path.clean]);
}

function styles() {
    return gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
}

function watch() {
    gulp.watch(path.watch.style, styles);
}

var build = gulp.series(clean, styles);

exports.build = build;
exports.watch = watch;