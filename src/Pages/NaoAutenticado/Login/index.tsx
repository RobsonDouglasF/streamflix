import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Flex, Input, Form, Typography } from "antd";

import {  useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { RequestToken } from "../../../Data/LocalStorage/requestToken";
import { Autenticacao } from "../../../Data/Requisicoes/Autenticacao";

export default function Login() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const token = RequestToken.getRequestToken();
  const navigate = useNavigate();
  console.log(token);

  const { mutate, isPending } = useMutation({
    mutationKey: ["chaveLogin"],
    mutationFn: () =>
      Autenticacao.login({
        password: senha,
        username: usuario,
        request_token: String(token),
      }),
    onSuccess: () => {
      navigate("/principal");
    },
    onError: () => {
      alert("Deu erro");
    },
  });

  return (
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
        rules={[{ required: true, message: "Por favor digite seu Usuario!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Digite o Usuario"
          onChange={(e) => setUsuario(e.target.value)}
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
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar-me</Checkbox>
          </Form.Item>
          <a href="">Esqueci minha Senha</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          loading={isPending}
          block
          type="primary"
          htmlType="submit"
          className="!font-bold"
          onClick={() => {
            mutate();
          }}
        >
          Acessar
        </Button>
        ou <a href="/registrar">Registrar-se</a>
      </Form.Item>
    </Form>
  );
}
