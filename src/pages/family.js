import React from "react";
import { DownloadOutlined } from '@ant-design/icons';

// Components
import Button from "../storybookcomponents/Button";

const Family = (props) => {

    const handleGedComFile = () => {
        props.history.push("/family/pedigree-view");
    }

    const handleNewTree = () => {
        props.history.push("/family/start-tree");
    }
    
    return (
        <div className="flex-center family-actions">
            <Button type="primary" danger={true} icon={<DownloadOutlined/>} handleClick={handleGedComFile} title="Get Pedigree View"/>
            <Button type="primary" danger={true} handleClick={handleNewTree} title="Start New Tree"/>
        </div>
    )
}

export default Family;