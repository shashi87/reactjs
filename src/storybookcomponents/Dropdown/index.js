import React from "react";
import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./index.css";

// Used Components
import Typography from "../Typography";

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
        <Typography size="size-14" color="black">1st menu item</Typography>
    </Menu.Item>
    <Menu.Item key="2">
        <Typography size="size-14" color="black">2nd menu item</Typography>
    </Menu.Item>
    <Menu.Item key="3">
        <Typography size="size-14" color="black">3rd menu item</Typography>
    </Menu.Item>
  </Menu>
);

const MyDropdown = ({ type }) => {

    switch(type){
        case "filter":
            return (
                <Dropdown overlay={menu} className="dropdown-filter">
                    <Button>
                        <Typography size="size-14" color="black">Filters</Typography> <DownOutlined />
                    </Button>
                </Dropdown>
            )
        
        default:
            return (
                <Dropdown overlay={menu}>
                    <Button>
                    Button <DownOutlined />
                    </Button>
                </Dropdown>
            )
    }
}

export default MyDropdown;