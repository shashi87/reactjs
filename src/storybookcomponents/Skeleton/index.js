import React from "react";
import { Skeleton } from "antd";

const MySkeleton = ({ rows }) => {
    
    return (
        <Skeleton paragraph={{ rows }} />
    )
}

export default MySkeleton;