import { useDispatch } from "react-redux";
import { setsearch } from "../redux/slice/SearchSlice";
import logo from "../foodlogo.webp";
import Cart from './Cart';
import { NavLink } from "react-router-dom";
const Navbar = () =>{
 
   const dispatch = useDispatch();

 return(
    <nav className="flex lg:justify-evenly justify-around bg-gray-900 py-2">
            <NavLink to="/">
        <div>
            <img src={logo} className="lg:h-12 lg:w-26 h-6 mt-3 "/>
        </div>
            </NavLink>
        <div>
        <input type="search"
         placeholder="search"
         name="search"
         autoComplete="off"
         className="lg:p-3 p-1 border-2 border-yellow-500 text-sm rounded-lg outline-none w-25 lg:w-[25vw] mt-2"
         onChange={(even) => {
            dispatch(setsearch(even.target.value))
         }}
         ></input>
        </div>
        <NavLink to="/login">
            <p className="text-white lg:text-lg mt-4 font-semibold hover:text-yellow-300 text-md">Sign In</p>
        </NavLink>
        <NavLink>
        <p className="text-white lg:text-lg font-semibold mt-4  hover:text-yellow-400">
            Contact
        </p>
        </NavLink>
        <div>
           <Cart />
        </div>
    </nav>
 )    
}
export default Navbar;