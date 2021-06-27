import { Layout } from "antd";
import { Sider } from "../components/Sider";

import "./AppLayout.css";

const AppLayout = () => {
  const { Content, Header } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
