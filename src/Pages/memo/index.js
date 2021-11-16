import React,{useMemo, useState} from 'react';

const Memo=props=>{
    const [show,setshow]=useState(true)
    const [background,setBackground]=useState("white")
// const memoValue=useMemo(()=>{

// },[])
const buttonclick=()=>{
    setshow(prev=>!prev);
}
const abc={backgroundColor:background}
const colorchange=()=>{
    for(let i=0;i<1000000000;i++){}
    setBackground(prev=>
      prev==='white'?'blue':'white'  
    )
}
    return <>
    <div >
    {show?<h1 style={abc}>hi i am here </h1>:<h2 style={abc}>i am invisible</h2>}
<br/>
<button onClick={buttonclick}>click here</button>
<br/>
<br/>
<br/>
<button onClick={colorchange}>click here</button>

<h2></h2>
</div>
    </>
}

export default Memo;