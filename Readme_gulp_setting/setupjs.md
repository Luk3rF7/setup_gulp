
<h2 align="center" style="font-size:30px">  Gulp setting  Javascript: </h2>
      
<p style="font-size:20px;"> ele vao definir workflow da aplicação :</p>


<li style="font-size:17px"> uglify = unificar arquivos  </li>
<li style="font-size:17px"> babel = transpilador do js </li>
<li style="font-size:17px"> concat = concatenar</li>

<hr>

<p style="font-size:25px;">instanciando plugins:</p>

<section style="border:1px solid green; border-radius:8px;margin:0;padding:0;">

           const  {series} = require('gulp')
           const  gulp = require('gulp')
           const concat = require('gulp-concat')
           const  uglify = require('gulp-uglify')
           const babel = require('gulp-babel')
           
                  function padrao(cb){
             // começa 
           return   gulp.('src/**/*.js')
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
              .on('error', err => console.log(err))  // <- quando acontecer determinado evento
            
            }

            function fim(cb){
              console.log('Fim!!!)
              return cb()
            }
               exports.default = series(padrao)



</section>
      
