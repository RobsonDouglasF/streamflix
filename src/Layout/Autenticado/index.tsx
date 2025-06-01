import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Layout,
  Menu,
  theme,
  type MenuProps,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router";

export default function LayoutAutenticado() {
  const menuHeader = ["Filmes", "Series", "Programas de TV"];
  const navHeader: MenuProps["items"] = menuHeader.map((label, index) => ({
    key: index + 1,
    label,
  }));

  const categorias = [
    "Ação",
    "Terror",
    "Comédia",
    "Aventura",
    "Documentario",
    "Drama",
    "Fantasia",
    "Ficção",
    "Romance",
  ];
  const opcao = ["Filmes", "Series"];

  const subItens = () =>
    opcao.map((tipo, index) => ({
      key: `cat-${index}`,
      label: tipo,
      children: subCategoria(index),
    }));

  const subCategoria = (prefixKey: number) =>
    categorias.map((categoria, index) => ({
      key: `${prefixKey}-${index}`,
      label: categoria,
    }));
  const navMenu: MenuProps["items"] = [
    {
      key: "categoria",
      label: "Categorias",
      children: subItens(),
    },
  ];
  const menuUser = ["Conta", "Listas", "Avaliações", "Sair"];
  const navHeaderData = menuUser.map((label, index) => ({
    key: index + 1,
    label,
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
           <div className="text-4xl font-bold text-red-600 mr-10">
            STREAMFLIX
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            items={navHeader}
            style={{ flex: 1, minWidth: 0 }}
          />
          <Dropdown menu={{ items: navHeaderData }}>
            <Avatar
              icon={<UserOutlined />}
              className="!bg-green-600 !size-10"
            />
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={navMenu}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb
              items={[{ title: "Home" }]}
              style={{ margin: "16px 0" }}
            />
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
