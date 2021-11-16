import React,{useState,useRef,useEffect} from 'react';
import * as d3 from 'd3';
import {scaleLinear} from "d3-scale";

const D3=props=>{
    const [data,setData]=useState(
        [{skill: "CSS", value: 80},
        {skill: "HTML", value: 70},{skill: "JS", value: 85}
        ,{skill: "ANGULAR", value: 90},{skill: "REACT", value: 75},{skill: "D3", value: 70},
        {skill: "NODE JS", value: 65},
        { skill: "JAVA", value: 65},
        {skill: "UI DESIGN", value: 70},
        {skill: "XD", value: 65}])
    const [yAxisAttribute,setyAxisAttribute]=useState("skill");
    const [xAxisAttribute,setxAxisAttribute]=useState("value");
    const [stateWidth,setstateWidth]=useState(1000);
    const [stateHeight,setstateHeight]=useState(400);
    const chartRef=useRef();

    const drawChart=()=>{
        let margin={top: 20, right: 30, bottom: 40, left: 90},
        width = stateWidth - margin.left - margin.right,
        height = stateHeight - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    let svg = d3.select(".rowChart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
// Add X axis
let x = d3.scaleLinear()
        .domain([0, 100])
        .range([ 0, width]);
svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr('class','axis x')
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
        let y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map((d) =>  d[yAxisAttribute]))
        .padding(.1);
svg.append("g")
        .attr('class','axis y')
        .call(d3.axisLeft(y))
        .selectAll("text")
        .attr("dy", null)
// Add Bars
svg.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .on('mouseover', function(){
            d3.select(this).style('opacity', 0.5)
         })
        .on('mouseout', function(){
            d3.select(this).style('opacity', 1)
         })
        .attr("x", x(0) )
        .attr("y", (d) => y(d[yAxisAttribute]))
        .attr("width", 0)
        .attr("height", y.bandwidth() -10 )
        .attr("fill", "#DF337D")
        .transition(d3.transition().duration(1000))
        .attr("width", (d) => x(d[xAxisAttribute]))
    }

    useEffect(()=>{
        drawChart();
    },[stateHeight,stateWidth])
  const  getWidth=()=>{
        return chartRef.current.parentElement.offsetWidth;
    }
   const getHeight=()=>{
        return chartRef.current.parentElement.offsetHeight;
    }
return <>

</>

}


export default D3;
