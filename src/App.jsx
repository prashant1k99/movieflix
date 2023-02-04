import { useState } from "react"
import Chip from "./component/Chips"
import { serverClient } from "./utils"

function App() {
  const [searchQuery, setSearchQuery] = useState('game-of-thrones')
  const fetchData = async () => {
    const data = await serverClient().get(`/search/multi?query=${searchQuery}`).catch(err => console.log(err))
  }
  return (
    <div className="App">
      <Chip>
        Hello
      </Chip>
    </div>
  )
}

export default App
