import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Flex, Form, Input, Typography } from "antd";
import { useState } from "react";

export default function Registrar() {
  const [usuario, setUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  return (
    <>
      <Form
        className="w-3xl"
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
      >
        <Col className="text-center mb-3">
          <Typography.Title className="!text-5xl !mb-0 !font-bold !text-red-600">
            STREAMFLIX
          </Typography.Title>
          <Typography.Paragraph className="!font-bold !text-blue-600">
            Filmes e Series
          </Typography.Paragraph>
          <Typography.Paragraph>Seja Bem Vindo!</Typography.Paragraph>
        </Col>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Por favor digite um Usuario!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Digite o Usuario"
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
            autoComplete="off" 
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor digite uma senha!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Digite a Senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            autoComplete="new-password" 
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembrar-me</Checkbox>
            </Form.Item>            
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="!font-bold"
          >
            Registrar
          </Button>
          ou <a href="/login">Acessar</a>
        </Form.Item>
      </Form>
    </>
  );
}
