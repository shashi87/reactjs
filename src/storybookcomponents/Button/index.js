import React from "react";
import { Button } from "antd";
import "./index.css";

const MyButton = ({ type, icon, danger, title, handleClick }) => {
    return (
        <Button type={type} onClick={handleClick} icon={icon} danger={danger}>{title}</Button>
    )
}

export default MyButton;