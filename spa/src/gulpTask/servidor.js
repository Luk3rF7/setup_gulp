// vai controlar um servidor
//  em desenvolvimento

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch =require('gulp-watch')


/* ====== servidor gulp ======== */

function servidor(cb){
  // vai observar esse arq
  return gulp.src('build')
  .pipe(webserver({
    //configuração do webserver:
    port: 8080, //porta
    open: true, // abrir navegador
    livereload:true, // auto carregamento da page
  }))
}
/* ======= monitorar arquivos  ======= */
function monitorarArquivos(cb){
  //monitorar a fontes

  // html
  watch('src/**/*.html' ,() => gulp.series('appHTML')())
  //css
  watch('src/**/*.scss' ,() => gulp.series('appCSS')())
  //js
  watch('src/**/*.js' ,() => gulp.series('appJS')())
  // img
  watch('src/assets/imgs/**/*.*' ,() => gulp.series('appIMG')())

  return cb()
}


module.exports ={ 
  servidor,
  monitorarArquivos,
}