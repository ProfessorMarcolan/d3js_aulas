

// d3.csv("/a6/dados_basquete.csv",(data)=>{

//     // window.data = data
//     console.log(data)


//     // data = [ {converted_x: 100,converted_y:200}, {converted_x: 32,converted_y:200}]


//     let canvas = d3.select("svg")

//     let shots = canvas.selectAll("circle").data(data).enter()
//         .append("circle")
//         .attr("class","shot")
//         .attr("cx", 20)
//         .attr("cy", 20)
//         .attr("r", 20)
//         .attr("fill","red")



// })

// read data
d3.csv("/a6/dados_basquete.csv", function(data){

    console.log(data)
    var shots = d3.select("svg")
        .selectAll("g")
            .data(data)
            .enter()
            .append("g") // a group for each row in the dataset
                .attr("class", "shot")
                .attr("transform", function(d){
                    return "translate(" + 10 * d.converted_y + "," + 10 * d.converted_x + ")";
                }) //transformation to show a horizontal and well-spaced court
            .on("mouseover", function(d){ //interaction to show player name on mouseover
                d3.select(this).raise()     //raise the player name text to the top of other svg elements
                    .append("text")
                    .attr("class", "playername")
                    .text(d.player);
            })
            .on("mouseout", function(d){ // remove the player name on moving the mouse away
                d3.selectAll("text.playername").remove();
            })

    shots.append("circle") // add a circle for each shot
         .attr("r", 5)
         .attr("fill", function(d) {
            if (d.result == "made") { // green circles for successful shots
                return "green";
            } else {
                return "red";
            }
        })


    var players = d3.nest() // filter by player and get total shots made by each player
        .key(function(d){ return d.player; })
        .rollup(function(a){ return a.length; })
        .entries(data);

    players.unshift({"key": "ALL", //create one entry that shows all shots
                     "value": d3.sum(players, function(d) { return d.value; })})

    var selector = d3.select("#selector"); //make a selecter to choose desired player

    selector    //add player name and count to each item in the drop down
         .selectAll("option")
         .data(players)
         .enter()
         .append("option")
             .text(function(d){ return d.key + ":" + d.value; })
             .attr("value", function(d){ return d.key; })

    selector //fade other shots when one player is selected
         .on("change", function(){
            d3.selectAll(".shot")
                .attr("opacity", 1.0);
             var value = selector.property("value");
            if (value != "ALL") {
                 d3.selectAll(".shot")
                     .filter(function(d) { return d.player != value; })
                     .attr("opacity", 0.1);
            }
        })


})

    
    // var shots = d3.select("svg")
    //     .selectAll("g")
    //         .data(data)
    //         .enter()
    //         .append("g") // a group for each row in the dataset
    //             .attr("class", "shot")
    //             .attr("transform", function(d){
    //                 return "translate(" + 10 * d.converted_y + "," + 10 * d.converted_x + ")";
    //             }) //transformation to show a horizontal and well-spaced court
    //         .on("mouseover", function(d){ //interaction to show player name on mouseover
    //             d3.select(this).raise()     //raise the player name text to the top of other svg elements
    //                 .append("text")
    //                 .attr("class", "playername")
    //                 .text(d.player);
    //         })
    //         .on("mouseout", function(d){ // remove the player name on moving the mouse away
    //             d3.selectAll("text.playername").remove();
    //         })

    // shots.append("circle") // add a circle for each shot
    //      .attr("r", 5)
    //      .attr("fill", function(d) {
    //         if (d.result == "made") { // green circles for successful shots
    //             return "green";
    //         } else {
    //             return "red";
    //         }
    //     })

    // console.log(data)

    // seleciona aonde desenhar
    // let canvas = d3.select("svg")

    // let shots = d3.select("svg").selectAll("g").data(data).enter().append("g")
    // // diexa mais facil no long-run
    // .attr("class","shot")
    // .attr("transform", (d) =>{
    //     return "translate(" + 10 * d.converted_y + "," + 10 * d.converted_x + ")";
    // }).append("circle");

    // let shots = d3.select("svg").selectAll("g").data(data).enter().append("circle")




// })

