console.log("oi mundo")

// cascata de metodos
// você se preocupa com o que quer fazer em vez de como fazer
// o que quer fazer sem precisar coda o como

// cascata de método no qual é ativado de acordo com uma classificacao.
let paragrafos = d3.selectAll("p")

paragrafos.style("color","red").style("background-color", "yellow")



let paragrafos_js = document.getElementsByTagName("p");

// precisa codar passo a passo o que vocÊ quer.
for(let i = 0; i <paragrafos_js.length; i++){
  let paragrafo_js = paragrafos_js.item(i);

  paragrafo_js.style.setProperty("color","blue")

}

// antiga

//  # parte 1.a biblioteca padrão do js
// let paragraphs = document.getElementsByTagName("p");

// // # parte 2.a biblioteca padrão do js
// for (let i = 0; i < paragraphs.length; i++) {
//   let paragraph = paragraphs.item(i);
//   paragraph.style.setProperty("color", "blue");
// }   

// // d3.selectAll("p").style("color", "red");
// // # parte 1.b ou pelo d3.js
// let paragrafos = d3.selectAll("p")

// // # parte 2.b pelo d3.js
// paragrafos.style("color","yellow")
// // referencia a todos os paragrafos encontrados
// // paragrafos.text("oiiii")

// // Yet, you can still manipulate individual nodes as needed:
// // vc pode selecionar e manipular os elementos.
// d3.select("body").style("background-color", "black");

