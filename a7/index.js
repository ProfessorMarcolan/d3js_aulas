
d3.csv("/a7/2013-14_shots.csv").then(function(data){

    console.log(data)




    var shots = d3.select("svg")
        .selectAll("g")
            .data(data)
            .enter()
            .append("g") // a group for each row in the dataset
                .attr("class", "shot")
                .attr("transform", function(d){
                    return "translate(" + 10 * d.converted_y + "," + 10 * d.converted_x + ")";
                }).on("mouseover", function(d){ //interaction to show player name on mouseover
                    d3.select(this).raise()     //raise the player name text to the top of other svg elements
                        .append("text")
                        .attr("class", "playername")
                        .text(d.player);
                }).on("mouseout", function(d){ // remove the player name on moving the mouse away
                            d3.selectAll("text.playername").remove();
                        })
                 //transformation to show a horizontal and well-spaced court

    shots.append("circle") // add a circle for each shot
         .attr("r", 5)
         .attr("fill", function(d) {
            if (d.result == "made") { // green circles for successful shots
                return "green";
            } else {
                return "red";
            }
        }) 



})
