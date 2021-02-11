import React from "react";
import { Modal } from "antd";

const MyModal = ({ title, visible, content, handleOk, handleCancel }) => {
  return (
    <Modal 
        title={title} 
        visible={visible} 
        onOk={handleOk} 
        onCancel={handleCancel}
    >
    {content}
    </Modal>
  );
};

export default MyModal;
