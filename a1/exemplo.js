console.log("oi mundo")

// //  # parte 1.a biblioteca padrão do js
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
// referencia a todos os paragrafos encontrados
// paragrafos.text("oiiii")

// Yet, you can still manipulate individual nodes as needed:
// vc pode selecionar e manipular os elementos.
d3.select("body").style("background-color", "black");

