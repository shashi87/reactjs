const Iframe=props=>{
    const buttonClick=e=>{
        alert('clicked')
        window.parent.postMessage({test:"this is test"},'*');
    }
    return <>
        <button onClick={buttonClick}>clickcckkkcckkckckkckckkkckckckkckckckck</button>
    </>

}

export default Iframe;