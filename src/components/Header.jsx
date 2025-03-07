import { Link } from "react-router-dom"


function Header() {
  
  return (
    <div className="bg-blue-950 p-4 flex justify-around items-center" >
      <Link to="/">
      <h2 className="font-bold text-white">
            Movies <span className="text-cyan-300">List</span>
          </h2></Link>
          <Link to="/favorites">
      <h2 className="font-bold text-white">
           Go to Favorites
          </h2></Link>
          
      
      
    </div>
  )
}

export default Header
