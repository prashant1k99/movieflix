
function Chip(props) {
  return (
    <div tabIndex={0} className="Chip px-3 py-1 rounded-full border border-slate-800 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-primary transition duration-300 ease focus:outline-none focus:ring-1 focus:border-0 focus:text-primary focus:ring-primary focus:ring-opacity-75">
      {props.children}
    </div>
  )
}

export default Chip
