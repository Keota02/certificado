class Pontuacao {
 constructor(){
 this.pontos = 0
 }
  
exibe() {
  textAlign(RIGHT)
  textFont(fonteTelaInicial)
  fill('#fff')
  textSize(60)
  text('Score:', width -120, 60)
  textSize(50)
  text(parseInt(this.pontos), width - 30, 50)
  
  this.pontos = this.pontos + 0.2
  }
}