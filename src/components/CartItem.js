import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrement, increment, removeTocart } from "../redux/slice/CartSlice";

const CartItem = ({ id, name, price, img, qty, handlertoast }) => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={() => {
        dispatch(removeTocart({ id, name, price, img, qty }))
        handlertoast(name)
      }}
        className="absolute right-7 text-gray-600 cursor-pointer" />
      <img src={img}alt="" className="w-[50px] h-[50px]"></img>
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between mt-2">
          <span className="text-green-500 font-bold">{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 ">
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 
                hover:text-white hover:bg-green-500 
                  hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() => qty > 1 ? dispatch(decrement({ id })) : (qty = 0)} />
            <span>{qty}</span>
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 
                hover:text-white hover:bg-green-500 
                  hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() => dispatch(increment({ id }))} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem