import { useState } from "react";
import ImageCard from "./component/Image";
import { serverClient } from "./utils";

function App() {
  const [searchQuery, setSearchQuery] = useState("game-of-thrones");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await serverClient()
      .get(`/search/multi?query=${searchQuery}`)
      .catch((err) => console.log(err));
    setData(data.results);
  };

  return (
    <div className="App">
      <ImageCard title='Game Of Thrones' imageSrc='https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg' />
    </div>
  );
}

export default App;
