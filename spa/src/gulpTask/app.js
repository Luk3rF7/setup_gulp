const gulp =require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


/*  Html */
function appHTML(){
  // pegando todos html
  return gulp.src('src/**/*.html')
  .pipe(htmlmin({
    //retirar espaço em branco
    collapseWhitespace:true
  }))
  .pipe(gulp.dest('build'))
}
/*  CSS */
function appCSS(){
  return gulp.src('src/assets/sass/index.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(uglifycss({
    "uglyComments": false
  }))
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('build/assets/css'))
}
/*  Javascript */
function appJS(cb){
  return gulp.src('src/assets/js/*.js')
  .pipe(babel({presets:['ENV']}))
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('build/assets/js'))
}
/*  Image */
function appIMG(cb){
  return gulp.src('src/assets/imgs/**/*.*')
  .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML',appHTML)
gulp.task('appCSS',appCSS)
gulp.task('appJS',appJS)
gulp.task('appIMG',appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}