import React, { useState } from "react";
import { IoMdClose } from "react-icons/io"
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const itemCart = useSelector((state) => state.Cart)
    console.log(itemCart);
    const [activeCart, setactiveCart] = useState(false);

    const totalprice = itemCart.reduce((total, food) => total + food.qty * food.price, 0)

    const navigate = useNavigate();

    function CheckoutHandler() {
        navigate("/signin")
    }


    const handlertoast = (name) => toast.error(`${name} Removed!`);

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className={`fixed bg-g right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 
        ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
               
                    <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-bold text-gray-600 text-gray-600 font-bold 
           p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 
           cursor-pointer">My order</span> <IoMdClose className="border-2  border-gray-600 text-gray-600 font-bold  
           text-lg rounded-md hover:text-red-300 hover:border-red-700" onClick={() => {
                            setactiveCart(false)
                        }} />
                </div>

                {
                    itemCart.length > 0 ? itemCart.map((food) => {
                        return (
                            <CartItem key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img}
                                qty={food.qty}
                                handlertoast={handlertoast}
                            />
                        );
                    }) : <h2 className="text-xl font-semibold text-center mt-10">Your cart is empty!</h2>}

                <div className="absolute bottom-5">
                    <h3 className="font-semibold text-gray-800">Items : {itemCart.length}</h3>
                    <h3 className="font-semibold text-gray-800">Total Amount : {totalprice}</h3>
                    <hr className="w-[90vw] lg:w[18vw] my-2" />
                    <button onClick={CheckoutHandler} className="bg-green-500 font-bold px-3 text-white py-2
            rounded-lg w-[90vw] lg:w-[18vw] ">Checkout</button>
                </div>
            </div>

            <p  className={`font-bold ml-1 text-sm bg-yellow-400 rounded-full  text-center w-5 h-5 ${itemCart.length > 0 ?("animate-bounce"):("")}`}>{itemCart.length}</p>
            <div className="flex text-white ">
                <AiOutlineShoppingCart onClick={() => {
                    setactiveCart(true)
                }} className="text-3xl cursor-pointer text-white" />
                <p className="lg:text-xl ml-1 cursor-pointer text-yellow-300 font-semibold ">Cart</p>
            </div>

        </>
    );
};
export default Cart;