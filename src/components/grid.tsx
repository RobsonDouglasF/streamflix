interface IGrid {
  img: string;
  titulo: string;
  click: () => void;
}

export const Grid = (Props: IGrid) => {
  return (
    <li className="w-40 list-none hover:scale-108 transition-transform duration-300">
      <div className="bg-white text-sm relative" onClick={Props.click}>
        <img src={`https://image.tmdb.org/t/p/original${Props.img}`} alt="" />
        <div className="p-2 absolute bottom-0">
          <p className="">{Props.titulo}</p>
        </div>
      </div>
    </li>
  );
};
