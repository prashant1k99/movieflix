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

  return (
    <div className="place-content-center container border-solid border-x border-white/30 mx-auto max-w-fit min-w-min p-5 bg-white/5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data
          .filter((el) => el.poster_path)
          .map((el) => (
              <ImageCard
                className=" m-auto "
                title={el.name || el.title}
                imageSrc={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                key={el.id}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Carousel;
