import React, { useState,useMemo } from 'react';

const Callback=()=>{
    const [a,setA]=useState(0)
    const [b,setB]=useState(false)
    const doubleNumber=(val)=>{
        for (let index = 0; index < 1000000000; index++) { }
        return val*2
    }
    const c=useMemo(()=>doubleNumber(a),[a]) 
    const themeStyle={
        backgroundColor:b?'blue':'red',
        color:b?'white':'black'
    }

    return <>
    <input type="number" value={a} onChange={e=>setA(Number(e.target.value))} />
    <button onClick={()=>setB(prev=>!prev)} >change theme</button>
<div style={themeStyle}>{c}</div>
    </>
}
export default Callback;