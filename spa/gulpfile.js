const { series,parallel } = require('gulp')
const gulp =require('gulp')

/*  destruction para pega task */
const {  appHTML,appCSS,appJS,appIMG } = require('./src/gulpTask/app')
const {  servidor,monitorarArquivos} = require('./src/gulpTask/servidor')
const {  depsCSS,depsFonts} = require('./src/gulpTask/deps')

      // * vamos definir como vai ser nosso workflow
module.exports.default = series(
  //vamos utilizar parallel
  parallel(
    //vamos jogar na series  os primeiro a ser executados
    series(appHTML,appCSS,appJS,appIMG),
   series(depsCSS,depsFonts)
  ),
  // depois que serem executado do parallel 
  //iniciamos o servidor com monitoramento
 servidor,
  monitorarArquivos)
