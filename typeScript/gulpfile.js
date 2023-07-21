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