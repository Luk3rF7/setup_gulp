const  {series} = require('gulp')
const  gulp = require('gulp')
const concat = require('gulp-concat')
const  uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
  // começa 
  gulp.('src/**/*.js')
  .pipe(babel({
    // babel recebe obj para definir
     comments:false
     presets:["env"] // preset são versoes do js es6,es5 ....
  }))
  .pipe(uglify(
    // vai pega todo codigo e unificar
  ))
  .pipe(concat(
    'codigo.min.js' // <- usamo min para dizer q e minificado
    // vai pega todo arquivo selecionado
    //da versao atual com nova e vai compilar
  ))
  .pipe(gulp.dest('build')) // local de destino pasta

  return cb()
}

exports.default =series(padrao)