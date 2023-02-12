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
    <div className="place-content-center laptop:container border-solid laptop:border-x border-white/30 mx-auto laptop:max-w-fit p-5 bg-white/5">
      <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
        {data
          .filter((el) => el.poster_path)
          .map((el) => {
            return (
              <ImageCard
                className=" m-auto"
                title={el.name || el.title}
                imageSrc={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
