var causeDataP = d3.csv("causeDataBarGraph.csv");
var drawChart = function(data)
{
  console.log(data);
  var height = 520;
  var width = 800;
  var barWidth = width/(data.length*2);
  var svg = d3.select("body")
              .append("svg")
              .attr("height",height)
              .attr("width",width+100)
              .style("fill","transparent");

  var svg2 = d3.select("body")
            .append("svg")
            .attr("height",height)
            .attr("width",width+100)
            .style("fill","transparent")
            .attr("y",0)
            .style("margin-top","-525px")
            .style("float","left");

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x",function(d,i)
      {
        return (i * barWidth*2)+(i*10);
      })
      .attr("y",function(d) {
        return height - parseInt(d.NumberMen)/200;
      })
      .attr("width",barWidth)
      .attr("height",function(d)
      {
        return parseInt(d.NumberMen)/200;
      })
      .attr("fill",function(d)
    {
      return "grey";
    })




/*var text = svg.selectAll("text")
    .data(data)
    .enter()*/

    svg.selectAll("text.NumberMen")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("class", "NumberMen")
                    .text(function(d){
                      return parseInt(d.NumberMen);
                      })
                      .attr("x",function(d,i){
                          return i * (width / data.length)+(i*10);
                      })
                      .attr("y",function(d){
                        return height - (parseInt(d.NumberMen)/200)-5;
                      })
                      .attr("fill","black");




    var legend = svg.append("rect")
        .attr("class","legend")
        .attr("height","100")
        .attr("width","200")
        .attr("x", "525")
        .attr("y", "50")
        .attr("fill","transparent")
        .attr("stroke","black")
        .attr("stroke-width", "2px");

        svg.append("rect")
            .attr("height","30")
            .attr("width","30")
            .attr("x", "540")
            .attr("y", "60")
            .attr("fill","grey")

        svg.append("rect")
            .attr("height","30")
            .attr("width","30")
            .attr("x", "540")
            .attr("y", "100")
            .attr("fill","pink")

        var name1 = svg.append("text")
            .text("# of Men")
            .attr("x", "580")
            .attr("y", "85")
            .attr("fill", "black")

        var name2 = svg.append("text")
            .text("# of Women")
            .attr("x", "580")
            .attr("y", "125")
            .attr("fill", "black")



        svg2.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x",function(d,i)
            {
              return (i * barWidth*2)+barWidth+(i*10);
            })
            .attr("y",function(d) {
              return height - parseInt(d.NumberWomen)/200;
            })
            .attr("width",barWidth)
            .attr("height",function(d)
            {
              return parseInt(d.NumberWomen)/200;
            })
            .attr("fill",function(d)
          {
            return "pink";
          })



      var text2 = svg2.selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text(function(d){
            return parseInt(d.NumberWomen);
          })
          .attr("x",function(d,i){
            return i * (width / data.length)+barWidth+(i*10);
          })
          .attr("y",function(d){
            return height - (parseInt(d.NumberWomen)/200)-5;
          })
          .attr("fill","black");




          svg.selectAll("text.Major")
                          .data(data)
                          .enter()
                          .append("text")
                          .attr("class", "Major")
                          .text(function(d){
                              return d.Major;
                          })
                          .attr("x",function(d,i){
                            return i * (width / data.length)+(i*10);
                          })
                          .attr("y",function(d){
                            return height -10;
                          })
                          .attr("fill","black")
                          .style("font-size", "12px")
                          .style("font-weight","bold");

      svg.append("text")
          .text("Number of Men and Women in STEM Majors")
          .attr("x",420)
          .attr("y",20)
          .attr("fill","black")
          .style("font-size", "18px")
          .style("font-weight","bold");




}



causeDataP.then(function(data)
{
  console.log("data", data);
  drawChart(data);
},
  function(err)
{
  console.log(err);
})
