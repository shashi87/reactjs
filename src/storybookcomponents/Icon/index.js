import React from "react";
import { SearchOutlined, PlusOutlined, MinusOutlined, AimOutlined } from "@ant-design/icons";
import "./index.css";

const Icon = ({ icon, handleClick }) => {

    switch(icon){
        case "search":
            return <SearchOutlined className="icon-size" onClick={handleClick}/>;

        case "plus":
            return <PlusOutlined className="icon-size" onClick={handleClick}/>;
        
        case "minus":
            return <MinusOutlined className="icon-size" onClick={handleClick}/>;

        case "aim":
            return <AimOutlined className="icon-size" onClick={handleClick}/>

        default:
            return <SearchOutlined className="icon-size" onClick={handleClick}/>;
    }
}


export default Icon;