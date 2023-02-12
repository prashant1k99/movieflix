const ImageCard = ({ title, imageSrc, size, isHoverable = true }) => {
  // TODO Add Min and max height as per the size of the screen
  // TODO handle size prop
  return (
    <div className={`relative m-2 group w-48 ${ isHoverable ? 'hover:ease-linear duration-300 hover:scale-105 hover:drop-shadow-m' : null }`}>
      <img className="rounded-xl" src={imageSrc} />
      { 
        title 
        ? <div className={ `absolute w-full rounded-xl border-radius-0 bottom-0 left-0 bg-bottom bg-gradient-to-t from-black ${isHoverable ? 'opacity-0 group-hover:transition-opacity group-hover:opacity-100 duration-300 ' : null}`}>
            <p className="select-none px-4 pb-3 pt-[92%] text-xl truncate">
              {title}
            </p>
          </div> 
        : null
      }
    </div>
  );
};

export default ImageCard;
