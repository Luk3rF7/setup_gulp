<h2 align="center" style="font-size:30px">  Gulp setting  Javascript: </h2>
      
<p style="font-size:20px;"> Projeto SPA</p>

<hr>

<p style="font-size:25px;">Dev dependencie :</p>

<section style="border:1px solid green;border-radius:8px;margin:0;padding:0;">

     {
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0",
    "font-awesome": "^4.7.0",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-htmlmin": "^5.0.1",
    "gulp-sass": "^5.1.0",
    "gulp-typescript": "^6.0.0-alpha.1",
    "gulp-uglify": "^3.0.2",
    "gulp-uglifycss": "^1.1.0",
    "gulp-watch": "^5.0.1",
    "gulp-webserver": "^0.9.1",
    "sass": "^1.64.0",
    "typescript": "^5.1.6"
    s  }
</section>
<div>
<h2 align="center"> Setup Gulpfile  init</h2>



                   const { series,parallel } = require('gulp')
                   const gulp =require('gulp')
                   ================== comments ==================
                /*  destruction para pega task */
                  ================================================

                const {  appHTML,appCSS,appJS,appIMG } = require('./gulpTask/app')
                const {  servidor,monitorarArquivos} = require('./gulpTask/servidor')
                const {  depsCSS,depsFonts} = require('./gulpTask/deps')

              ================== comments ==================
              // * vamos definir como vai ser nosso workflow
               ================================================

                exports.default = series(
                    ================= comments ===========================
                         //vamos utilizar parallel
                   ================================================
                parallel(
                //vamos jogar na series  os primeiro a ser executados
               series(appHTML,appCSS,appJS,appIMG),
                 series( depsCSS,depsFonts)
                 ),
                ==================== comments ============================
                // depois que serem executado do parallel 
                     //iniciamos o servidor com monitoramento
                  ================================================
                     servidor,
                     monitorarArquivos)
 

 <h2 align="center" style="font-size:35px"> Pasta gulpTAsk </h2>

 <h3> Pasta responsavel por organizar as task do gulp</h3>
 
<ul> Exemplo:
<li style="font-size:30px"> deps.js </li> 
<hr>
<br>
<div style="border:1px solid white;">

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
</div>


<li style="font-size:30px"> app.js </li>
<br>
<div style="border:2px solid green">


      const gulp =require('gulp')
      const babel = require('gulp-babel')
      const uglify = require('gulp-uglify')
      const sass = require('gulp-sass')(require('sass'))
      const uglifycss = require('gulp-uglifycss')
      const concat = require('gulp-concat')
      const htmlmin = require('gulp-htmlmin')


               /*  Html */
        ==================================       
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
        =========================
        function appCSS(){
          return gulp.src('src/assets/sass/index.scss')
          .pipe(sass().on('error',sass.logError))
          .pipe(uglifycss({
            "uglyComments": false
          }))
          .pipe(concat('app.min.css'))
          .pipe(gulp.dest('build/assets/css'))
        }       
               /*  Javascript  */
            ===========================
        f       unction appJS(cb){
          return gulp.src('src/assets/js/*.js')
          .pipe(babel({presets:['ENV']}))
          .pipe(uglify())
          .pipe(concat('app.min.js'))
          .pipe(gulp.dest('build/assets/js'))
        }
            /*  Image */
        ==================================    
        function appIMG(cb){
          return gulp.src('src/assets/imgs/**/*.*')
          .pipe(gulp.dest('build/assets/imgs'))
        }

        module.exports = {
          appHTML,
          appCSS,
          appJS,
          appIMG
        }
</div>


<li style="font-size:28px"> servidor.js  </li>
<br>
<div style="border:2px solid green">

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
 
  </div>
</ul>

</div>



      