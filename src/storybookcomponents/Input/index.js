import React from "react";
import { Input } from "antd";
import "./index.css";

const MyInput = ({ name, placeholder, value, handleChange }) => {

    return (
        <Input 
            className="input-main"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}

export default MyInput;