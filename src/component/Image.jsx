const ImageCard = ({ title, imageSrc, size, isHoverable = true }) => {
  // TODO Add Min and max height as per the size of the screen
  // TODO handle size prop
  return (
    //image container with hover effect if required
    <div
      // onClick=""
      className={`tablet:w-24 tablet:h-36 laptop:w-32 laptop:h-48 desktop:w-48 desktop:h-72 group relative m-2 ${
        isHoverable
          ? "duration-300 hover:scale-105 hover:drop-shadow-xl hover:ease-linear"
          : null
      }`}
    >
      {/* media image */}
      <img className="absolute bottom-0 left-0 rounded-xl" src={imageSrc} />
      {/* bottom to up gradient div*/}
      {title ? (
        <div
          className={`border-radius-0 absolute bottom-0 left-0 h-full w-full rounded-xl bg-gradient-to-t from-black bg-bottom ${
            isHoverable
              ? "opacity-0 duration-300 group-hover:opacity-100 group-hover:transition-opacity"
              : null
          }`}
        >
          {/* source title */}
          <p className="tablet:px-2 tablet:pb-1 laptop:px-3 laptop:pb-2 desktop:px-4 desktop:pb-3 tablet:text-sm laptop:text-base desktop:text-lg absolute  bottom-0 select-none pt-[92%]">
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ImageCard;
