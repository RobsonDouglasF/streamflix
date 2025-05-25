import { useEffect, useState } from "react";
import { Destaque } from "./components/destaque";
import { Rodape } from "./components/footer";
import { Grid } from "./components/grid";
import { Cabecalho } from "./components/header";
import type { Result, Root } from "./types/axios";
import { Api } from "./libs/axios";
import { AiOutlineLike } from "react-icons/ai";

function App() {
  const [filmesPopulares, setFilmesPopulares] = useState<Result[]>([]);
  const [filmesAssistindo, setFilmesAssistindo] = useState<Result[]>([]);
  const [filmesLancamento, setFilmesLancamento] = useState<Result[]>([]);
  const [filmeDestaque, setFilmeDestaque] = useState<Result | null>(null);
  const [type, setType] = useState<
    "login" | "register" | "page" | "modal" | null
  >("login");

  useEffect(() => {
    const populares = async () => {
      const req = await Api.get<Root>("/3/movie/top_rated").then((res) => {
        setFilmesPopulares(res.data.results);
      });
      return req;
    };
    populares();
  }, []);
  useEffect(() => {
    const assistindo = async () => {
      const req = await Api.get<Root>("/3/movie/now_playing").then((res) => {
        setFilmesAssistindo(res.data.results);
      });
      return req;
    };
    assistindo();
  }, []);
  useEffect(() => {
    const lancamento = async () => {
      const req = await Api.get<Root>("/3/movie/upcoming").then((res) => {
        setFilmesLancamento(res.data.results);
      });
      return req;
    };
    lancamento();
  }, []);

  const filmePorId = async (id: number) => {
    const req = await Api.get(`/3/movie/${id}`).then((res) => {
      setFilmeDestaque(res.data);
    });
    return req;
  };

  return (
    <div className="flex justify-center items-center text-black h-screen">
      <div>
        {type === "login" && type !== null && (
          <form
            method="POST"
            className="p-5 bg-white rounded-sm border border-gray-200 flex flex-col gap-5 text-sm shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="bg-blue text-3xl font-bold ">Login</h1>
            <p className="text-gray-500">
              Digite seus dados de acesso nos campos abaixo:
            </p>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">E-mail</label>
              <input
                className="p-2 border border-gray-300 rounded-sm mb-5 outline-0"
                type="email"
                placeholder="Digite o e-mail"
                autoFocus={true}
              />
              <label htmlFor="password">Senha</label>
              <input
                className="p-2 border border-gray-300 rounded-sm outline-0"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <a className="underline text-gray-600" href="/Outros">
              Esqueci minha senha
            </a>
            <input
              className="bg-pink-500 p-2 font-bold text-white cursor-pointer"
              type="submit"
              value={"Acessar"}
              onClick={() => setType("page")}
            />
            <button
              onClick={() => {
                setType("register");
              }}
              className="cursor-pointer hover:text-blue-600"
            >
              Registrar
            </button>
          </form>
        )}
        {type === "register" && type !== null && (
          <form
            method="POST"
            className="p-5 bg-white rounded-sm border border-gray-200 flex flex-col gap-5 text-sm shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="bg-blue text-3xl font-bold">Registrar-se</h1>
            <p className="text-gray-500">
              Digite seus dados de acesso nos campos abaixo:
            </p>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">E-mail</label>
              <input
                className="p-2 border border-gray-300 rounded-sm mb-5 outline-0"
                type="email"
                placeholder="Digite o e-mail"
                autoFocus={true}
              />
              <label htmlFor="password">Senha</label>
              <input
                className="p-2 border border-gray-300 rounded-sm outline-0"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>

            <input
              className="bg-pink-500 p-2 font-bold text-white cursor-pointer"
              type="submit"
              value={"Registrar"}
            />
            <button
              onClick={() => {
                setType("login");
              }}
              className="cursor-pointer hover:text-blue-600"
            >
              Login
            </button>
          </form>
        )}
      </div>

      {type === "page" && (
        <div className="h-full text-white w-full">
          {filmeDestaque && (
            <header>
              <Cabecalho />
              <Destaque
                titulo={filmeDestaque.title}
                sinopse={filmeDestaque.overview}
              />
            </header>
          )}

          <main className="w-full p-8 bg-[#141414] flex flex-col gap-5 text-2xl font-bold">
            <h1 className="">Populares na Streamflix</h1>
            <div className="grid grid-cols-8 gap-5 mb-15">
              {filmesPopulares.map((filme) => (
                <Grid
                  key={filme.id}
                  img={filme.poster_path}
                  titulo={filme.title}
                  click={() => {
                    setType("modal");
                    filmePorId(filme.id);
                  }}
                />
              ))}
            </div>
            <h1>Continuar assistindo</h1>
            <div className="grid grid-cols-8 gap-5 mb-15">
              {filmesAssistindo.map((filme) => (
                <Grid
                  key={filme.id}
                  img={filme.poster_path}
                  titulo={filme.title}
                  click={() => {
                    setType("modal");
                  }}
                />
              ))}
            </div>
            <h1>Lançamentos</h1>
            <div className="grid grid-cols-8 gap-5 mb-15">
              {filmesLancamento.map((filme) => (
                <Grid
                  key={filme.id}
                  img={filme.poster_path}
                  titulo={filme.title}
                  click={() => {
                    setType("modal");
                  }}
                />
              ))}
            </div>
          </main>
          <footer className="bg-[#141414] border-t border-t-gray-800">
            <Rodape />
          </footer>
        </div>
      )}
      {type === "modal" && filmeDestaque !== null && (
        <div className="w-full h-full text-white">
          <Cabecalho />
          <div className="h-full overflow-hidden relative  bg-gray-900">
            <img
              src={`https://image.tmdb.org/t/p/original${filmeDestaque.poster_path}`}
              alt=""
              className="opacity-30"
            />
            <div className="absolute inset-0 px-25 py-8 flex gap-8 ">
              <div className="bg-blue-950 w-220 h-110 gap-4 flex flex-col justify-center items-center pb-4 rounded-lg overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/original${filmeDestaque.poster_path}`}
                  alt=""
                  className="hover:scale-105 transition-transform duration-300"
                />
                <h3 className="cursor-pointer">Assista Agora</h3>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">{`${filmeDestaque.title}  - (${filmeDestaque.release_date} (BR))`}</h1>           
                <div className="flex gap-15 items-center font-bold ">
                  <div className="flex items-center gap-3 w-35">
                    <p className="bg-green-950 rounded-full border border-gray-400 p-3 h-15 flex items-center">65%</p>
                    <p>Avaliação dos usuários</p>
                  </div>
                  
                  <button className="px-8 h-10 rounded-full bg-blue-950 flex gap-3 items-center hover:scale-105 transition-transform duration-300 cursor-pointer">Gostei <AiOutlineLike /></button>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-2xl">Sinopse</h1>
                  <p>{filmeDestaque.overview}</p>
                </div>         
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
