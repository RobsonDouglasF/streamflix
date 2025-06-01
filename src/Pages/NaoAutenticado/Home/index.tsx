import { useQuery } from "@tanstack/react-query";
import { Col, Divider } from "antd";
import { useEffect, useState } from "react";
import { RequestToken } from "../../../Data/LocalStorage/requestToken";
import {
  Autenticacao,
  type Result,
} from "../../../Data/Requisicoes/Autenticacao";

export function Home() {
  console.log('Inicou')
  const [filmesPopulares, setFilmesPopulares] = useState<Result[]>([]);
  const [filmesMaisAssistidos, setFilmesMaisAssistidos] = useState<Result[]>(
    []
  );
  const [filmesLançamentos, setFilmesLancamentos] = useState<Result[]>([]);

    const { data, isSuccess } = useQuery({
    queryKey: ["RequerindoToken"],
    queryFn: () => Autenticacao.getRequestToken(),
  });
  useEffect(() => {
    if (isSuccess && data) {
      RequestToken.setTokenRequest(data.request_token);
    }
  }, [data, isSuccess]);

  const { data: dataPopulares } = useQuery({
    queryKey: ["populares"],
    queryFn: () => Autenticacao.dataFilmesPopulares(),
  });
  useEffect(() => {
    if (dataPopulares) {
      RequestToken.setTokenRequest(dataPopulares.request_token);
      setFilmesPopulares(dataPopulares.results);
    }
  }, [dataPopulares]);

  const { data: dataMaisAssitidos } = useQuery({
    queryKey: ["maisAssistidos"],
    queryFn: () => Autenticacao.dataFilmesMaisAssistidos(),
  });
  useEffect(() => {
    if (dataMaisAssitidos) {
      RequestToken.setTokenRequest(dataMaisAssitidos.request_token);
      setFilmesMaisAssistidos(dataMaisAssitidos.results);
    }
  }, [dataMaisAssitidos]);

  const { data: dataLancamento } = useQuery({
    queryKey: ["Lancamentos"],
    queryFn: () => Autenticacao.dataFilmesLancamentos(),
  });
  useEffect(() => {
    if (dataLancamento) {
      RequestToken.setTokenRequest(dataLancamento.request_token);
      setFilmesLancamentos(dataLancamento.results);
    }
  }, [dataLancamento]);

  return (
    <>
      <Divider className="!text-3xl" orientation="left">
        Populares
      </Divider>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex">
          {filmesPopulares.map((item) => (
            <Col key={item.id} span={3}>
              <div className=" w-[150px] flex flex-col gap-2 cursor-pointer ">
                <img
                  className="max-h-[220px] hover:scale-108 transition duration-300 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <div className="px-3 pb-3">
                  <h1 className="text-[15px] font-bold text-wrap">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.release_date}</p>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
      <Divider className="!text-3xl" orientation="left">
        Top Rated
      </Divider>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex">
          {filmesMaisAssistidos.map((item) => (
            <Col key={item.id} span={3}>
              <div className=" w-[150px] flex flex-col gap-2 cursor-pointer ">
                <img
                  className="max-h-[220px] hover:scale-108 transition duration-300 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <div className="px-3 pb-3">
                  <h1 className="text-[15px] font-bold text-wrap">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.release_date}</p>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
      <Divider className="!text-3xl" orientation="left">
        Lançamentos
      </Divider>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex">
          {filmesLançamentos.map((item) => (
            <Col key={item.id} span={3}>
              <div className=" w-[150px] flex flex-col gap-2 cursor-pointer ">
                <img
                  className="max-h-[220px] hover:scale-108 transition duration-300 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <div className="px-3 pb-3">
                  <h1 className="text-[15px] font-bold text-wrap">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.release_date}</p>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
    </>
  );
}
