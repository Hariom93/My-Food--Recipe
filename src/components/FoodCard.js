
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/slice/CartSlice";


const FoodCard = ({ id, img, name, category, desc, rating, price, handlertoast }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-b from-gray-200 font-bold w-[300px] bg-white p-5 flex flex-col  rounded-lg gap-2 ml-8">
      <img src={img} alt=""
        className="w-auto h-[170px] hover:scale-110 rounded-lg cursor-grab transition-all duration-500 ease-in-out"
      ></img>
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">{price}</span>
      </div>
      <p className="text-sm font-normal ">{desc.slice(0, 50).concat("...")}</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" />{rating}
        </span>
        <button onClick={() => {
          dispatch(addTocart({ id, img, name, price, rating, qty: 1 }))
          handlertoast(name);
        }} className="p-1 text-white bg-green-500 border-1 hover:bg-green-600 rounded-lg text-sm ">Add to cart</button>
      </div>
    </div>
  )
}
export default FoodCard