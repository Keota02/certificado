class Jogo {
 constructor(){
  this.indice = 0;
   
  this.mapa = fita.mapa

  this.gameOver = false
 }
  
setup() {
  cenario = new imagemCenario(Cenario, 3);
  pontuacao  = new Pontuacao();
  vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  
  
  personagem = new imagemPersonagem(matrizPersonagem,   Personagem, 0, 30, 200, 200, 128, 128)
  const inimigo = new imagemInimigo(matrizInimigo, Inimigo, 0, -15, 180, 160, 128, 128, 10)
  const inimigoVoador = new imagemInimigo(matrizInimigoVoador, InimigoVoador, width -52, 150, 100, 75, 200, 150, 10)
  const inimigoGrande = new imagemInimigo(matrizInimigoGrande, InimigoGrande, width * 2, 0, 200, 200, 400, 400, 15)
  
  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)

  trilhaDoJogo.loop();
 }
  keyPressed(key){
  if(key === 'ArrowUp'){
   personagem.pula()
   somDoPulo.play()
 }
    
  if(this.gameOver && key === 'Enter')
  window.location.reload();
  }
  
  draw(){
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  vida.draw();  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const linhaAtual = this.mapa[this.indice]
  const inimigo = inimigos[linhaAtual.inimigo];
  const inimigoVisivel = inimigo.x < -inimigo.largura;
  inimigo.velocidade = linhaAtual.velocidade;
  
  inimigo.exibe();
  inimigo.move();
  
  if(inimigoVisivel) { 
    this.indice++;
    inimigo.aparece();
  if(this.indice > this.mapa.length - 1){
    this.indice = 0;   
     }
    }
    
    if(personagem.estaColidindo(inimigo)){ 
      vida.perdeVida()
      personagem.ficaInvencivel()
      if(vida.vidas == 0) {
      this.gameOver = true
      image(imagemGameOver, width/2 - 220, height/2 - 150)
      noLoop()
      trilhaDoJogo.stop();
      trilhaGameOver.play();
      }
    }
  }
}