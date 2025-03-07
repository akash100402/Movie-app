import Header from "./components/Header"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <div>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </main>
    </div>
  )
}

export default App
