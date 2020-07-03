function preload() {
 Cenario = loadImage('imagens/cenario/forest pixel art.png');
 imagemGameOver = loadImage('imagens/assets/gameover-pixel.png');
 Personagem = loadImage ('imagens/personagem/caveMan 4.png') 
 Inimigo = loadImage ('imagens/inimigos/KillerBerry.png')
 InimigoGrande = loadImage ('imagens/inimigos/troll.png')
 InimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
 trilhaDoJogo = loadSound('sons/trilhaMessenger.mp3');
 trilhaGameOver = loadSound('sons/trilhaGameOver.mp3');
 somDoPulo = loadSound('sons/somPulo.mp3')
 imagemTelaInicial = loadImage('imagens/cenario/telaInicial-2.png')
 fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
 fita = loadJSON('fita/fita.json')
 imagemVida = loadImage('imagens/assets/minecraftHeart.png')
}
