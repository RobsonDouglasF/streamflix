import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Flex, Input, Form, Typography } from "antd";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { RequestToken } from "../../../data/LocalStorage/requestToken";
import { Autenticacao } from "../../../data/Requisicoes/Autenticacao";

export default function Login() {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const token = RequestToken.getRequestToken();
  const navigate = useNavigate();

  const { data: pegarToken, isFetching } = useQuery({
    queryKey: ["RequerindoToken"],
    queryFn: () => Autenticacao.getRequestToken(),
  });
  const sessionTokenMutate = useMutation({
    mutationKey: ['sessionToken'],
    mutationFn: (request: string) => Autenticacao.sessionToken({request_token:request}),
    onSuccess: (data) => {
      RequestToken.setRequestSession(data.session_id)
      navigate('/principal')
    },
    onError: () => {
      alert('Erro de session')
    }
  })

  const { mutate } = useMutation({
    mutationKey: ["chaveLogin"],
    mutationFn: () =>
      Autenticacao.login({
        password: senha,
        username: usuario,
        request_token: String(token),
      }),
    onSuccess: (retornoLogin) => {
      sessionTokenMutate.mutate(retornoLogin.request_token)
    },
    onError: () => {
      alert("Deu erro");
    },
  });
  useEffect(() => {
    if (pegarToken) {
      RequestToken.setTokenRequest(pegarToken.request_token);
    }
  }, [pegarToken, token]);

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
          loading={sessionTokenMutate.isPending}
          block
          type="primary"
          htmlType="submit"
          className="!font-bold"
          onClick={() => {
            mutate();
          }}
          disabled={isFetching}
        >
          Acessar
        </Button>
        ou <a href="/registrar">Registrar-se</a>
      </Form.Item>
    </Form>
  );
}
