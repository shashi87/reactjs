import React from "react";
import MyModal from "../Modal";
import Browse from "../Browse";
import { Button } from "antd";

const MyBrowseButtonModal = ({
    handleCancel, 
    visible, 
    handleOk, 
    loading, 
    formData, 
    setFormData
}) => {
    return (<>
        <MyModal
            title="Browse Your Location"
            content={<Browse formData = {formData} setFormData={setFormData}/>}
            visible={visible}
            width={620}
            handleCancel={handleCancel}
            footer = {
                <>
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Save
                    </Button>
                </>
            }
            className = "browse_module"
        />
    </>)
}

export default MyBrowseButtonModal;