import { useState, useEffect } from "react";
import ImageCard from "./component/Image";
import { serverClient } from "./utils";

function App() {
  // const [searchQuery, setSearchQuery] = useState("game-of-thrones");
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
    <div className="flex">
      {data
        .filter((el) => el.poster_path)
        .filter((el, index) => index < 5)
        .map((el) => {
          return (
            <ImageCard
              title={el.name || el.title}
              imageSrc={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              key={el.id}
            />
          );
        })}
    </div>
  );
}

export default App;
