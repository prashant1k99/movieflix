import { useEffect, useState } from "react";

const ImageCard = () => {
  const [type, setType] = useState("ListItem");
  const [source, setSource] = useState(
    "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg"
  );
  useEffect(() => {}, []);
  return (
    <div className="bg rounded-3xl relative w-48 bg-bottom hover:w-[12.125rem] hover:brightness-110 hover:drop-shadow-2xl">
      <img
        className="bg rounded-3xl gradient-to-r hover:from-slate-800"
        src={source}
      />
      <div className="absolute rounded-3xl w-[150%] rotate-[270deg] h-[67%] bottom-[15%] left-[-25%] bg-bottom bg-gradient-to-r from-black"></div>
      <div className="absolute rounded-3xl bottom-0 -left-0 w-full h-full">
        <p className="select-none truncate mt-[135%] pr-2 pl-2">
          Game of thrones of game of thrones of game of thrones
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
