import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  theme,
  Typography,
  type MenuProps,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router";

export const LayoutHome = () => {
  const navigate = useNavigate(); 
  const menuHeader = ["Filmes", "Series", "Programas de TV"];
  const navHeader: MenuProps["items"] = menuHeader.map((label, index) => ({
    key: index + 1,
    label,
  }));
  const menuUser = [
    "Entrar",
    "Listas",
    "Avaliações",
  ];
  const navHeaderData = menuUser.map((label, index) => ({
    key: index.toString(),
    label,
  }));

  const menuHeaderClick = ({ key }: { key: string }) => {
    const selected = menuUser[parseInt(key)];

    switch (selected) {
      case "Entrar":
        navigate("/login");          
        break;
      case "Conta":
        break;
      case "Dados da Conta":
        break;
      case "Listas":
        break;
      case "Avaliações":
        break;
      case "Sair":
        break;
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <Dropdown menu={{ items: navHeaderData, onClick: menuHeaderClick }}>
            <Avatar
              icon={<UserOutlined />}
              className="!bg-green-600 !size-10"
            />
          </Dropdown>
        </Header>
        <Content style={{ padding: "0 48px", marginBottom: "48px" }}>
          <Col className="px-30 py-15 flex flex-col gap-5">
            <Typography.Title className="!mb-[-50px] !font-bold !text-5xl !text-blue-600">
              Bem-Vindo(a).
            </Typography.Title>
            <Typography.Title level={2}>
              Milhões de Filmes, Séries e Canais para Descobrir. Explore já.
            </Typography.Title>
            <Input.Search
              placeholder="Buscar por um Filme, Série ou Canal"
              size="large"
            />
          </Col>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center !bg-[#001529] !text-white">
          <Col className="flex gap-50 justify-center mb-5 text-left">
            <div className="mr-[-100px] flex flex-col justify-center items-center">
              <h1 className="text-4xl text-red-600 font-bold">STREAMFLIX</h1>
              <p className="text-2xl">Milhões de Filmes, Séries e Canais</p>
            </div>
            <Col className="!flex !flex-col">
              <Typography.Title level={4} className="!text-white">
                Tecnologias
              </Typography.Title>
              <Typography.Text className="!text-gray-400">
                ReactJS
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                TypeScript
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                TailwindCSS
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                Ant Design
              </Typography.Text>
            </Col>
            <Col className="!flex !flex-col">
              <Typography.Title level={4} className="!text-white">
                Dependências
              </Typography.Title>
              <Typography.Text className="!text-gray-400">Node</Typography.Text>
              <Typography.Text className="!text-gray-400">
                React-Query
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                React-Router
              </Typography.Text>
            </Col>
            <Col className="!flex !flex-col">
              <Typography.Title level={4} className="!text-white">
                Requisições
              </Typography.Title>
              <Typography.Text className="!text-gray-400">
                API TMDB
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                Req-Login
              </Typography.Text>
              <Typography.Text className="!text-gray-400">
                Req-Dados
              </Typography.Text>
            </Col>
          </Col>
          <p className="text-gray-400">
            StreamFlix ©{new Date().getFullYear()} Created by Robson Douglas
          </p>
        </Footer>
      </Layout>
    </>
  );
};
