import React,{useRef,useEffect,useState} from 'react';
import {select, line, curveCardinal,scaleLinear,axisBottom} from 'd3'
import './index.css';
import BarChart from './BarChart';
import TreeChart from './treeChart';
const Tree=()=>{
    const initialData = {
        name: "😐",
        children: [
          {
            name: "🙂",
            children: [
              {
                name: "😀",
                children:[{name :"test"},{name :"test"},{name :"test"},{name :"test"},{name :"test"}]
              },
              {
                name: "😁"
                
              },
              {
                name: "🤣"
              }
            ]
          },
          {
            name: "😔"
          }
        ]
      };
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const [treeData, setTreeData] = useState([25, 30, 45, 60, 10, 65, 75]);
    let data1=[100,5,30,4,4,56,76,7];
    const svgRef=useRef();
    console.log('individual',svgRef)
    
    useEffect(() => {
        const svg=select(svgRef.current);
        const xScale=scaleLinear().domain([0,data1.length-1]).range([0,300])
        const yScale=scaleLinear().domain([0,150]).range([150,0])
        const xAxis=axisBottom(xScale)
        svg.select(".x-axis").style('transform',"translateY(150px)").call(xAxis);

        const myline=line().x((val,ind)=>xScale(ind)).y(yScale).curve(curveCardinal)
        
       svg.selectAll('.line').data([data1]).join('path')
       .attr('class','line')
       .attr('d',value=>myline(value))
       .attr('fill','none')
       .attr('stroke','blue');

    }, [])
    return <>
    <svg ref={svgRef}>
        
    </svg>
    <BarChart data={data}/>
    <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
<br />
<br />
<br />
<h1>Animated Tree Chart</h1>
      <TreeChart data={treeData} />
      <button onClick={() => setTreeData(initialData.children[0])}>
        Update data
      </button>




    </>

}


export default Tree;