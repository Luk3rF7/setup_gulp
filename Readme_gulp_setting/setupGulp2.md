#                         Setup gulp 

<section>
<h2>  Gulp setting : </h2>
      
<h3>  execuções com gulp <p>
<hr>
<h3> funcao : </h3>
 <li> pipe() serve para você fazer transformação ou aplicar os arquivos que vocÊ definiu
<h4> gulp.src <- você utiliza como entrada do workflow </h4>
<h4> gulp.dest <- você da destino dos arquivos </h4>

<p>Exemplo:</p>

<section style="border:1px solid green; border-radius:8px">

            gulp.src(['pastaA/arq.txt','pastaA/arq2.txt'])
             //podemos utilizar  ele vai bustar todas extenção txt nas pastas 
            gulp.src('pastaA/**/*.txt')
            .pipe(transformaEmUnicoTxt())
            .pipe(filtroPretoBranco())
            .pipe(gulp.dest('pastaB'))
<hr>
</section>


      
</section>