import React from "react";
import "./index.css";

const Typography = ({ size, color, children }) => {

    return (
        <div className={`typography-main ${size} ${color}`}>{children}</div>
    )
}

export default Typography;