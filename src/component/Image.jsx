import { useEffect, useState } from "react";
const ImageCard = () => {
  const [type, setType] = useState("ListItem");
  const [source, setSource] = useState(
    "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg"
  );
  useEffect(() => {}, []);
  return (
    <div>
      <img src={source} />
    </div>
  );
};

export default ImageCard;
