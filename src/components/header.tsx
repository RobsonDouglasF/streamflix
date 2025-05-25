import { TbBell } from "react-icons/tb";

export const Cabecalho = () => {
    return (
        <header className="flex py-4 px-5 w-full justify-between">
            <div className="flex gap-10 items-center">
            <h1 className="text-4xl font-bold text-red-500 cursor-pointer">STREAMFLIX</h1>
            <ul className="flex gap-5">
                <li className="cursor-pointer hover:text-gray-400">Inicio</li>
                <li className="cursor-pointer hover:text-gray-400">Series</li>
                <li className="cursor-pointer hover:text-gray-400">Filmes</li>
                <li className="cursor-pointer hover:text-gray-400">Bombando</li>
                <li className="cursor-pointer hover:text-gray-400">Minha lista</li>
            </ul>
            </div>
            <div className="flex gap-5 items-center">
            <input type="text" 
                placeholder="Titulos, pessoas, gêneros"
                className="border border-gray-600 py-1 px-3 rounded-md text-white"
            />
                <TbBell 
                    size={24}
                    className="text-white cursor-pointer hover:text-gray-400"
                />
                <button className="w-8 h-8 bg-red-600 p-1 rounded-full font-bold cursor-pointer hover:bg-red-500">U</button>
            </div>
        </header>
    )
}