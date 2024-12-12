const inicioPrograma = Number(prompt(`
   ========= Bem-Vindo =========
       O que deseja comprar?
   =============================
      Selecione uma opção
   _____________________________
 [1] - Banana
 [2] - Maçã
 [3] - Manga
 [4] - Laranja
 [5] - Limão `)) 
 function calcularPrecoManga(preco, marca) {
         var kgmanga = Number(prompt("quantos Kg de mangas você deseja comprar?"))
        var resultado = kgmanga * preco
        alert(`você comprou a manga ${marca} e foram ${kgmanga}Kg e o valor foi de ${resultado.toLocaleString(`pt-br`, {
         style: `currency`,
         currency: `BRL`
      })} `)

 }
function calcularPrecoLaranja(preco, kg, promocao, marca){
   var kgLaranja = Number(prompt(` Quantos Kg de ${marca} você deseja?`))

         if( kgLaranja > kg ){
            resultado = kgLaranja * promocao
            alert(`Você comprou ${marca} e o valor na promoção foi de ${resultado.toLocaleString(`pt-br`, {
               style: `currency`,
               currency: `BRL`
            })}`)
           
         }
        else{
            resultado = kgLaranja * preco
            alert(`Você comprou ${marca}  e o valor foi de ${resultado.toLocaleString(`pt-br`, {
               style: `currency`,
               currency: `BRL`
            })}`)
}
}

function comprarBanana() {
   var resultado = 0

   alert ("Preço da banana é R$ 1,30 a unidade, apartir de 12 unidades o preço é R$ 1,00")

   var qtdBanana = Number(prompt("Quantas bananas você deseja comprar?"))

   if (qtdBanana < 12) {
       resultado = qtdBanana * 1.30

      alert(`O valor da sua compra é de ${resultado.toLocaleString(`pt-br`, {
         style: `currency`,
         currency: `BRL`
      })} `)}
   else{
    resultado = qtdBanana * 1.00

alert(`O Valor da sua compra é de ${ resultado }`)

}

}
function comprarMaca() {
   var resultado = 0

   alert ("Preço da maça é R$ 8,55 o Kg, apartir de 2 kG o preço é R$ 6,99")

   var qtdMaca = Number(prompt("Quantos kilos  você deseja comprar?"))

   if (qtdMaca >= 2) {
       resultado = qtdMaca * 6.99

      alert(`O valor da sua compra é de ${resultado.toLocaleString(`pt-br`, {
         style: `currency`,
         currency: `BRL`
      })} `)}
   else{
    resultado = qtdMaca * 8.55

alert(`O Valor da sua compra é de ${ resultado }`)

}
}
function comprarManga() {

  
   var mangas = Number(prompt(`
      Selecione a Manga
       que voçê deseja
   _____________________________
    O Kg da manga 
   [1] Palmer R$5,49
   [2] Rosa R$10,00
   [3] Tommy R$2,99
   `))

switch (mangas) {
   case 1:
   calcularPrecoManga(5.49, "palmer")
      break;
case 2:
calcularPrecoManga(10, "rosa")

      break;
      case 3:
        calcularPrecoManga(2.99, "tommy")
         break;
}



}
function comprarLaranja() {
   var resultado = 0
   var laranjas = Number(prompt(`
      Selecione a Laranja
       que voçê deseja
   _____________________________
    O Kg das Laranjas 
   [1] Laranja-pera R$ 5,99 Kg a cima de 2Kg R$ 5,00
   [2] Laranja-Lima R$ 3,00 Kg a cima de 3Kg R$ 2,00
   [3] Laranja-Bahia R$ 4,00 Kg a cima de 4Kg R$ 3,50 
   `))
   switch (laranjas) {
      case 1:
        calcularPrecoLaranja ( 5.99 , 2 ,  5 , "laranja pera")
         break;
   
      case 2:
        calcularPrecoLaranja (3 , 3 , 2 , "laranja lima" )
         break;
         case 3:
           calcularPrecoLaranja (4 , 4 , 3.50, "laranja bahia")
            break;
   }
}

switch (inicioPrograma) {
   case 1:
      comprarBanana()
     break;

     case 2:
      comprarMaca()
      break;
     
     case 3:
      comprarManga()
      break;
      case 4:
         comprarLaranja()
         break
  }