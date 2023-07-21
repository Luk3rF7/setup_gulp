<section>
<h2>  Gulp setting Sass: </h2>
      
<p  style="font-size:18px;">Caso de erro no sass execute:</p>

<div style="font-size:17px;">

1 -tente desinstalá-lo usando este comando:
npm uninstall node-sass e depois 
<br>
2 - tente instalar o sass:
npm install --save-dev sass 

</div>


<section style="border:1px solid green; border-radius:8px">

            const {series } = require('gulp')
            const gulp = require('gulp')
            const sass = require('gulp-sass')(require('sass'))
            const concat =require('gulp-concat')
            const uglifycss = require('gulp-uglifycss')

            function transformacaoCss(){
                return gulp.src('src/sass/index.scss')
            .pipe(sass().on('error',sass.logError)) // vai pega todo sass e converte em css
            .pipe(uglifycss({
                 "uglyComments":true
                     }))
             .pipe(concat('estilo.min.css'))
             .pipe(gulp.dest('build/css'))
                }

      exports.default =series(transformacaoCss)
<hr>
</section>


      
</section>