document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
       })
    
    let TamanhoAtualFonte = 1;
    
    const AumentaFonteBotao = document.getElementById('aumentar-fonte');
    const DiminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    AumentaFonteBotao.addEventListener('click' , function () {
        TamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${TamanhoAtualFonte}rem`;
    });    
        DiminuirFonteBotao.addEventListener('click' , function () {
            TamanhoAtualFonte -=0.1;
            document.body.style.fontSize = `${TamanhoAtualFonte}rem`;
    });

});


   