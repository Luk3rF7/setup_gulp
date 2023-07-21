// seria as dependencias vai gerar arquivo js 
// com todas as dependendcias e querer gerar outro
// arq js com meu codigo da minha aplicação

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

/*  dependencias Css */
function depsCSS(){
return gulp.src('node_modules/font-awesome/css/font-awesome.css')
.pipe(uglifycss({"uglyComments":false}))
.pipe(concat('deps.min.css'))
.pipe(gulp.dest('build/assets/css'))
}
/*  dependendcias das font  */
function depsFonts(cb){
   // pegando todas as fonts do awesome:
  return gulp.src('node_modules/font-awesome/fonts/*.*')
  .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
  depsCSS,
  depsFonts
}