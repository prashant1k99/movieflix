import { useEffect, useState } from "react";

const ImageCard = () => {
  const [type, setType] = useState("ListItem");
  const [source, setSource] = useState(
    "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg"
  );
  useEffect(() => {}, []);
  return (
    <div className="relative m-2 group rounded-3xl w-48 hover:ease-linear duration-300 hover:scale-105 hover:drop-shadow-2xl">
      <img className=" rounded-3xl" src={source} />
      <div className="absolute rounded-3xl opacity-0 bottom-0 left-0 group-hover:transition-transform group-hover:opacity-100 hover:delay-300 duration-300 bg-bottom bg-gradient-to-t from-black">
        <p className="select-none px-3 pb-4 pt-[100%]">
          Game of thrones ofasdd game of thrones of game of thrones
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
