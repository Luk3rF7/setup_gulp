#                         Setup gulp 

<section>
<h2> Package.json e dependencias inicial: </h2>
      
<p> utilizando comando gulp no terminal e pasta do arquivo gulpfile ele executa.

<li> yarn add -D gulp
<li> yarn add -D gulp-sass
<li> yarn add -D gulp-babel
<li> yarn add -D gulp-concat
<li> yarn add -D gulp-uglify 
<li> yarn add -D gulp-uglifycss
<li> yarn add -D gulp-typescript 
<li> yarn add -D babel-core
<li> yarn add -D babel-preset-env
<li> yarn add -D typescript

<hr>

      "devDependencies": {
      "babel-core": "^6.26.3",
      "babel-preset-env": "^1.7.0",
      "gulp": "^4.0.2",
      "gulp-babel": "^8.0.0",
      "gulp-concat": "^2.6.1",
      "gulp-sass": "^5.1.0",
      "gulp-typescript": "^6.0.0-alpha.1",
       "gulp-uglify": "^3.0.2",
       "gulp-uglifycss": "^1.1.0",
       "typescript": "^5.1.6"
          
        }
</section>
<section>
<h2> Series & paralell  </h2>
      
<p> utilizando comando gulp no terminal e pasta do arquivo gulpfile ele executa.

<p> Podemos utilizar paralell da seguinte forma :</p>

<hr>
      
       const {series,parallel}

        module.exports.default = series(
        // vai executar em series
            task,
                 // com isso ele executa em paralelo
            parallel( receiveTask,initTask),
                    execTask,
                    finallyTask
        )


<hr>

      const gulp = require('gulp')  
           
      const series  = gulp.series


      //cada função dessa recebe umas task
      function task(cb){
        console.log('tarefa 1')
        return cb()
      }
      //    iniciando
      function initTask(cb){
        console.log('iniciando tarefa')
        return cb()
      }
      //  recebendo
      function receiveTask(cb){
        console.log('recebendo tarefa')
        return cb()
      }
      // executando
      function execTask(cb){
        console.log('executando a tarefa')
        return cb()
      }
      //  finalizando
      function finallyTask(cb){
        console.log('finalizou tarefa seguinte:',task)
        return cb()
      }


      module.exports.default = series(
        // vai executar em series
                    task,
                    receiveTask,
                    initTask,
                    execTask,
                    finallyTask
        )


</section>

