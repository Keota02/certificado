class imagemPersonagem extends Animacao{
 constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
  super (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
   
   this.variacaoY = variacaoY 
   this.yInicial = height - 140 - this.variacaoY;
   this.y = this.yInicial;
   
   this.velocidadeDoPulo = 0;
   this.gravidade = 7;
   this.alturaDoPulo = -50
   this.pulos = 0
   this.invencivel = false
 }

   pula(){
     if(this.pulos < 2){
   this.velocidadeDoPulo = this.alturaDoPulo
       this.pulos++
  }
   }
  
  aplicaGravidade() {
  this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  ficaInvencivel() {
   this.invencivel = true
   setTimeout(() => {
   this.invencivel = false
   }, 1000)
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel){
    return false
    }
    
    const precisao = .5
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
      );
    return colisao;
  }
  
}

