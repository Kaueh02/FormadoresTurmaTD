document.addEventListener('DOMContentLoaded', function () {
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
   