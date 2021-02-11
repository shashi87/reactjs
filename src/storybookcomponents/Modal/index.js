import React from "react";
import { Modal } from "antd";
import "./index.css";

const MyModal = ({ 
  title, 
  visible, 
  content, 
  handleOk, 
  handleCancel, 
  width, 
  wrapClassName, 
  footer }) => {
  return (
    <Modal
        title={title} 
        visible={visible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={width?width:200}
        footer={footer?footer:null} 
        {...wrapClassName?{wrapClassName: wrapClassName}:{}}
        closable={false}
        bodyStyle={{
          padding: 0
        }}
    >
      {content}
    </Modal>
  );
};

export default MyModal;
