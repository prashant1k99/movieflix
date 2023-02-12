import { useState } from "react"
import { Link } from "react-router-dom"
import Chip from "./component/Chips"
import { serverClient } from "./utils"

function App() {
  const [searchQuery, setSearchQuery] = useState('game-of-thrones')
  const fetchData = async () => {
    const data = await serverClient().get(`/search/multi?query=${searchQuery}`).catch(err => console.log(err))
  }
  return (
    <div className="App flex space-x-4">
      <Link className="px-3 py-1 rounded-full border border-slate-800 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-primary transition duration-300 ease focus:outline-none focus:ring-1 focus:border-0 focus:text-primary focus:ring-primary focus:ring-opacity-75" to="/test">TV</Link>
      <Link className="px-3 py-1 rounded-full border border-slate-800 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-primary transition duration-300 ease focus:outline-none focus:ring-1 focus:border-0 focus:text-primary focus:ring-primary focus:ring-opacity-75" to="/movie">Movie</Link>
      <Chip>
        Movie
      </Chip>
      <Chip>
        Categories
      </Chip>
    </div>
  )
}

export default App
