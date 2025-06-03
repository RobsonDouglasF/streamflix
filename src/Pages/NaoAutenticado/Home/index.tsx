import { useQuery } from "@tanstack/react-query";
import { Col, Divider } from "antd";
import { useEffect, useState } from "react";
import { Filmes, type Result } from "../../../data/Requisicoes/Filmes";

export function Home() {

  const { data: dataPopulares } = useQuery({
    queryKey: ["populares"],
    queryFn: () => Filmes.dataFilmesPopulares(),
  });

  const { data: dataMaisAssitidos } = useQuery({
    queryKey: ["maisAssistidos"],
    queryFn: () => Filmes.dataFilmesMaisAssistidos(),
  });

  const { data: dataLancamento } = useQuery({
    queryKey: ["Lancamentos"],
    queryFn: () => Filmes.dataFilmesLancamentos(),
  });
  
  const [filmesPopulares, setFilmesPopulares] = useState<Result[]>([]);
  const [filmesMaisAssistidos, setFilmesMaisAssistidos] = useState<Result[]>([]);
  const [filmesLançamentos, setFilmesLancamentos] = useState<Result[]>([]);  

  useEffect(() => {
    if(dataPopulares){
      setFilmesPopulares(dataPopulares.results)      
    }
    if(dataMaisAssitidos) {
      setFilmesMaisAssistidos(dataMaisAssitidos.results)
    }
    if(dataLancamento) {
      setFilmesLancamentos(dataLancamento.results)
    }  
  },[dataLancamento, dataMaisAssitidos, dataPopulares])
  
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
