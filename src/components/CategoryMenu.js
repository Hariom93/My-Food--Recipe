import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/CategorySlice";
import bgimg from "../img.avif"

const CategoryMenu = () => {

   const selectorCategory = useSelector((state) => state.category)

   const dispatch = useDispatch();

   const [categoryies, setCategories] = useState([]);

   const listUniqueCategories = () => {
      const uniqueCategories = [...new Set(FoodData.map((food) => food.category)),];
      setCategories(uniqueCategories);
      console.log(uniqueCategories);
   };

   useEffect(() => {
      listUniqueCategories();
   }, []);

   return (
      <div className="flex flex-col justigy-center items-center  border-b-2">
         <div className="w-full h-full ">
            <img src={bgimg} alt="" className="w-full lg:h-[65vh] h-[40vh] relative cursor-grab"></img>
         </div>
         <h3 className="text-5xl mt-4  ml-10 w-96 lg:w-[40vw] absolute text-white pt-10">What are you thinking about ? Find the best food</h3>
         <div className=" flex gap-5 scroll-smooth lg:overflow-x-hidden absolute mt-60">
            <button onClick={() =>
               dispatch(setCategory("All"))}
               className={`px-3 py-2 bg-gray-300 font-bold rounded-lg mt-4 border-white border-2
                ${selectorCategory === "All" && "bg-gray-700 text-white"}`}>
               All
            </button>

            {categoryies.map((category, index) => {
               return (
                  <button
                     onClick={() => dispatch(setCategory(category))
                     } key={index} className={`px-3 py-2 bg-gray-300 font-bold rounded-lg mt-4 border-white border-2
                ${selectorCategory === category && "bg-gray-700 text-white"}`}>
                     {category}
                  </button>
               );
            })}
         </div>
      </div>
   )
}
export default CategoryMenu