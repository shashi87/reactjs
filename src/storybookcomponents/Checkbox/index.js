import React from "react";
import { Checkbox } from "antd";
import "./index.css";

// Used Components
import Typography from "../Typography";

const MyCheckbox = ({ title, checked, handleCheck }) => {
    return (
        <Checkbox checked={checked} onChange={handleCheck}>
            <Typography size="size-14" color="black">{title}</Typography>
        </Checkbox>
    )
}

export default MyCheckbox;