

export const Rodape = () => {
    return (
        <>
        <div className="flex justify-between px-8 py-5 mr-60 ">
            <div className="flex flex-col gap-1">
                <h1 className="mb-5 text-gray-300">StreamFlix</h1>
                <p className="text-sm text-gray-400 cursor-pointer">Perguntas frequentes</p>
                <p className="text-sm text-gray-400 cursor-pointer">Relações com investidores</p>
                <p className="text-sm text-gray-400 cursor-pointer">Formas de assistir</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="mb-5 text-gray-300">Ajuda</h1>
                <p className="text-sm text-gray-400 cursor-pointer">Central de ajuda</p>
                <p className="text-sm text-gray-400 cursor-pointer">Empregos</p>
                <p className="text-sm text-gray-400 cursor-pointer">Termos de uso</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="mb-5 text-gray-300">Conta</h1>
                <p className="text-sm text-gray-400 cursor-pointer">Conta</p>
                <p className="text-sm text-gray-400 cursor-pointer">Resgatar cartão pré-pago</p>
                <p className="text-sm text-gray-400 cursor-pointer">Privacidade</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="mb-5 text-gray-300">Contato</h1>
                <p className="text-sm text-gray-400 cursor-pointer">Imprensa</p>
                <p className="text-sm text-gray-400 cursor-pointer">Comprar cartão pré-pago</p>
                <p className="text-sm text-gray-400 cursor-pointer">Preferencias de cookies</p>
            </div>
        </div>
        <div className="text-center py-5 text-sm text-gray-400">
            <p>2025 StreamFlix. Todos os direitos reservados.</p>
        </div>
        </>
    )
}