import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import "./AppLayout.css";

const AppLayout = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const { Sider, Content, Header } = Layout;

  const onCollapseClick = () => {
    setSiderCollapsed((current) => !current);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={siderCollapsed}
        onCollapse={onCollapseClick}
      >
        <div className="filler" />
        <Menu>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
