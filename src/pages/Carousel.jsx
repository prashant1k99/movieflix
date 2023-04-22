import { useState, useEffect } from "react";
import ImageCard from "../component/Image";
import { serverClient } from "../utils";
const Carousel = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await serverClient()
      .get(`/trending/all/day`)
      .catch((err) => console.log(err));
    setData(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="mx-auto place-content-center border-solid border-white/30 bg-white/5 p-5 laptop:container laptop:max-w-fit laptop:border-x">
      <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
        {data
          .filter((el) => el.poster_path)
          .map((el) => (
            <ImageCard
              className=" m-auto "
              title={el.name || el.title}
              imageSrc={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              key={el.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
