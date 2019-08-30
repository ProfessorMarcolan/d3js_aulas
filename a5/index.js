


let frutas = [{tipo:"maca",r:30, cor:"#8f1029"},
{tipo:"laranja",r:40, cor:"#e67d0e"},
{tipo:"abacate",r:50, cor:"#48e60e"},
{tipo:"banana",r:60, cor:"#8f1029"}]


function render(frutas){
    let canvas = d3.select("svg")

    canvas.attr("height", 800)
    canvas.attr("width", 800)

    let frutas_2 = canvas.selectAll("g").data(frutas)
                .enter().append("g")
                .attr("r", d => d.r)
                .attr("transform", (d,i) => `translate(${120*i + 30},${400})`)

    


frutas_2.append("circle").attr("r", 5)
            .attr("r", d => d.r)
            .attr("fill",d => d.cor).on("mouseover",function(d){
                d3.select(this).attr("fill","blue")
            }).on("mouseout",function(d){
                d3.select(this).attr("fill",d => d.cor)
            })



frutas_2.append("text").text(d=> d.tipo)

}


render(frutas)


setInterval(()=>{

    frutas.forEach( (el) =>{ el.r = el.r + 10})

    render(frutas)
},1000)




// let frutas_d3 = canvas.selectAll("circle").data(frutas)
//             .enter().append("circle")
//             .attr("r", d => d.r)
//             .attr("cy", 400)
//             .attr("cx", (d,i) => 120*i + 30)
//             .attr("fill",d => d.cor).on("mouseover",function(d){
//                 d3.select(this).attr("fill","blue")
//             }).on("mouseout",function(d){
//                 d3.select(this).attr("fill",d => d.cor)
//             })





