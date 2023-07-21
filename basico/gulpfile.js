const gulp = require('gulp')
const series  = gulp.series


//cada função dessa recebe umas task
function task(cb){
  gulp.src(['pastaA/**/*.txt'])
  .pipe(gulp.dest('pastaB'))
  return cb()
}


module.exports.default = series(
  // vai executar em series
              task,
            
  )