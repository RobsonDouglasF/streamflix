import { PiPlayCircle } from "react-icons/pi";
import { IoInformationCircleOutline } from "react-icons/io5";

interface IDestaque {
  sinopse: string;
  titulo: string;
}

export const Destaque = (Props: IDestaque) => {
    return (
        
        <section className="w-full relative h-136 bg-[url('fundo.png')] bg-cover bg-center flex flex-col justify-center px-8 ">
            <div className=" absolute text-white flex flex-col gap-5 max-w-3xl">
                <h1 className="text-6xl font-bold">{Props.titulo}</h1>
                <p className="text-xl">{Props.sinopse}</p>
                <div className="flex gap-5">
                    <button className="bg-red-600 px-8 py-3 font-bold rounded-sm flex items-center gap-2 cursor-pointer hover:bg-red-500">
                        {<PiPlayCircle size={24}/>}
                        Assistir
                    </button>
                    <button className="bg-gray-700 px-8 py-3 font-bold rounded-sm flex items-center gap-2 cursor-pointer hover:bg-gray-600">
                        <IoInformationCircleOutline size={24}/>
                        Mais informações
                    </button>
                </div>
            </div>
        </section>
    )
}