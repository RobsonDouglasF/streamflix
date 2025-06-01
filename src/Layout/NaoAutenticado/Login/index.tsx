
import { Col, Layout, Typography } from "antd";
import { Outlet } from "react-router";

export default function LayoutNaoAutenticado() {
  return (
    <Layout>
      <Col className="flex justify-between h-screen !sm:overflow-hidden ">
        <Col className="w-1/2 relative flex justify-center bg-black">
          <Col className="!absolute top-50 text-center ">
            <Typography.Title className="!text-6xl !font-bold !mb-0 !text-red-600">
              STREAMFLIX
            </Typography.Title>
            <Typography.Paragraph className="!text-2xl !font-bold !text-blue-600">
              Filmes e Series
            </Typography.Paragraph>
          </Col>
          <img src="fundo3.jpg" alt="" className="opacity-17 w-full" />
        </Col>
        <Col className="w-1/2 flex justify-center items-center bg-gray-white">
          <Outlet/>
        </Col>
      </Col>
    </Layout>
  );
}
