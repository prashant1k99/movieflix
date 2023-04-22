const ImageCard = ({ title, imageSrc, size, isHoverable = true }) => {
  // TODO Add Min and max height as per the size of the screen
  // TODO handle size prop
  return (
    //image container with hover effect if required
    <div
      // onClick=""
      className={`relative m-2 group tablet:w-24 tablet:h-36 laptop:w-32 laptop:h-48 desktop:w-48 desktop:h-72 ${
        isHoverable
          ? "hover:ease-linear duration-300 hover:scale-105 hover:drop-shadow-xl"
          : null
      }`}
    >
      {/* media image */}
      <img className="absolute bottom-0 left-0 rounded-xl" src={imageSrc} />
      {/* bottom to up gradient div*/}
      {title ? (
        <div
          className={`absolute w-full rounded-xl border-radius-0 h-full bottom-0 left-0 bg-bottom bg-gradient-to-t from-black ${
            isHoverable
              ? "opacity-0 group-hover:transition-opacity group-hover:opacity-100 duration-300"
              : null
          }`}
        >
          {/* source title */}
          <p className="select-none absolute bottom-0 tablet:px-2 tablet:pb-1 laptop:px-3 laptop:pb-2 desktop:px-4 desktop:pb-3 pt-[92%]  tablet:text-sm laptop:text-base desktop:text-lg">
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ImageCard;
