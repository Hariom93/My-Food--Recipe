import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


const FoodItem = () => {

    const handlertoast = (name) => toast.success(`Added ${name}`);
    const categorycard = useSelector((state) => state.category);
    const search = useSelector((state) => state.search);
    return (
        <><Toaster
            position="top-center"
            reverseOrder={false}
        />
            <div className="flex flex-wrap justify-center lg:justify-start lg:ml-20 mt-14 gap-y-10">
                {
                    FoodData.filter((food) => {

                        if (categorycard === "All") 
                        {
                            return food.name.toLowerCase().includes(search);
                        }
                        else {
                            return categorycard === food.category &&
                                food.name.toLowerCase().includes(search);   
                        }
                    }).map((food) => (
                        <FoodCard key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            desc={food.desc}
                            category={food.category}
                            rating={food.rating}
                            img={food.img}
                            handlertoast={handlertoast}
                        />
                    ))
                }
                <div>
                </div>
            </div>
        </>
    )
}
export default FoodItem