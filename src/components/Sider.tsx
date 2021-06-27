import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BarsOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./Sider.module.css";

export const Sider = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapseClick = () => {
    setSiderCollapsed((current) => !current);
  };

  return (
    <Sider collapsible collapsed={siderCollapsed} onCollapse={onCollapseClick}>
      <div className={styles.brandTemp} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["endpoints"]}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <SubMenu key="endpoints" icon={<BarsOutlined />} title="Endpoints">
          <Menu.Item key="add new" icon={<PlusOutlined />}>
            Add
          </Menu.Item>
          <SubMenu key="projects" title="Projects">
            <Menu.Item key="add new project" icon={<PlusOutlined />}>
              Add
            </Menu.Item>
            <Menu.Item key="project1">Project 1</Menu.Item>
          </SubMenu>
          <Menu.Item key="reports">Reports</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
