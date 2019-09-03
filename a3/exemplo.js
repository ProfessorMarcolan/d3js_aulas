
// function render(dados){
//     let div = d3.select("#elemento_a_ser_selecionado")


//     // selection a união entre as tags do html com os dados
//     let paragrafos = div.selectAll("p").data(dados)
//     .text(d=>{return d}).enter()
//     .append("p").text(d => {return d})

//     paragrafos.exit().remove()
    
//  seleciona dados sele.data(data)
// seta a conecção entre dados e visual
// }
let div = d3.select("#elemento_a_ser_selecionado")

let dados1 = [{n:"Oi mundo"}, {n:"Hello world"}, {n:"hola mundo"}, {n:"salut le monde"}]
    
div.selectAll("p").data(dados1).text(d=>{return  d.n}).enter()
    .append("p").text(d => {return d.n}).exit().style("color","yellow")

dados1[0].n = "jdiasjidasjdasji"
dados1.pop()
div.selectAll("p").data(dados1).enter().style("color","red").exit().remove()


// render(dados1)
// dados1.pop()
// 
// render(dados2)
// paragrafos.data(dados)
// paragrafos.exit().style("color", "blue");
// paragrafos.style("color", "blue");











