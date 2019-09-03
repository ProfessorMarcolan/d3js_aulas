

// let data = [10];



// let circle = canvas.append("circle")
//             .attr("cx",50)
//             .attr("cy",50)
//             .attr("r",50)


// let circles = canvas.selectAll("circle").data(data)
//             .enter()
//                 .append("circle")
//                 .attr("cx",50)
//                 .attr("cy",100)
//                 .attr("r",50)


// aparece os dois circulos
// data = [10,20];

// let circle = canvas.append("circle")
//             .attr("cx",50)
//             .attr("cy",50)
//             .attr("r",50)

            

// let circles = canvas.selectAll("circle").data(data)
//             .attr("fill","red")
//             .enter()
//                 .append("circle")
//                 .attr("cx",50)
//                 .attr("cy",100)
//                 .attr("r",50)
//                 .attr("fill","green")

// https://www.youtube.com/watch?v=OZXYk_bgQGQ
// delete
var data = [100, 200, 300];

var canvas = d3.select("body").append("svg").attr("width",500).attr("height",500)
var circle1 = canvas.append("circle")
            .attr("cx",50)
            .attr("cy",100)
            .attr("r",25);

var circle2 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 200)
            .attr("r", 25);


// só da trigger se a quantidade for menor
// se for maior ele trigerred
// igual, menor, maior

var circles = canvas.selectAll("circle").data(data)
            .attr("fill","green")
            
            
    circles.enter()
            .append("circle")
            .attr("cx",50)
            .attr("cy",(d)=> {return d})
            .attr("r",50)
            .attr("fill","red")


    circles.exit().attr("fill","blue")
// alguma coisa está errado com o delete.
// circles
            
    
    // elementos que est'ao nessa selecao quero aplicar esse efeito.
    