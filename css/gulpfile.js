const {series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat =require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function transformacaoCss(){
  return gulp.src('src/sass/index.scss')
  .pipe(sass().on('error',sass.logError)) 
  // vai pega todo sass e converte em css
  .pipe(uglifycss({
    "uglyComments":true
  }))
  .pipe(concat('estilo.min.css'))
  .pipe(gulp.dest('build/css'))
}

function transformaHtml(){
  return gulp.src('src/index.html')
  .pipe(gulp.dest('build'))
}

exports.default =series(transformacaoCss,transformaHtml)