const VaildateError=props=>{
    let msg=''
    if(props.error && props.error.type=='required' ){
        msg=`${props.key} is required`
    }
    if(props.error && (props.error.type=='validate'|| props.error.message)){
        msg=props.error.message
    }

return <><span style={{color:"red"}}>{msg}</span></>
}

export default VaildateError;