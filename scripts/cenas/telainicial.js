class TelaInicial {
 constructor(){
 }
  
  draw() {
  this._imagemDeFundo();
  this._texto();
  this._botao();
  }
  
  _imagemDeFundo(){
  image(imagemTelaInicial, 0, 0, width, height)
  }
  
  _texto(){
  textAlign(CENTER);
  textFont(fonteTelaInicial);
  textSize(80)
  text('Hunted by', width/2, height/3)
  textSize(150)
  text('Foods',width/2, height/6 * 3)
  }
  
  _botao(){
   botaoGerenciador.y = height/7 * 5
   botaoGerenciador.draw();
  }
}