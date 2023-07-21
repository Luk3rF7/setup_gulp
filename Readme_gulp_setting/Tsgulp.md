<h2 align="center" style="font-size:30px">  Gulp setting  Javascript: </h2>
      
<p style="font-size:20px;"> ele vao definir workflow da aplicação :</p>

<li style="font-size:17px">ts.createProject -> fica responsavel por direcionar pasta inicial  </li>

<hr>

<p style="font-size:25px;">setting TsGulp</p>

<section style="border:1px solid green; border-radius:8px;margin:0;padding:0;">

           const gulp { series } = require("gulp")
          const gulp = require('gulp')
          const ts = require('gulp-typescript')
          const tsProject = ts.createProject('tsconfig.json')

            function transformacaoTS() {
          return tsProject.src() // utilizamo como ponto de partida
           .pipe(tsProject())
           .pipe(gulp.dest('build'))
          }

          exports.default = series(transformacaoTS)
           




</section>
      