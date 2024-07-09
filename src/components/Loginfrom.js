import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Loginfrom = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({ number: " " })

    function changeHandler(event) {
        setformData((prevdata) => (
            {
                ...prevdata,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        navigate("/signin");
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5">
            <p className="text-3xl font-semibold ">Login</p>
            <div>
                <NavLink to="/signin">
                    <span>or </span><span className="text-yellow-500 font-semibold">create an account</span>
                </NavLink>
                <img src="" alt=""></img>
            </div>
            <div className="border border-black w-10"></div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <input
                            type="text"
                            placeholder="Phone number"
                            required
                            className="mt-2  border  pl-5 py-5 w-96 outline-none ml-3"
                            name="number"
                            value={formData.password}
                            onChange={changeHandler}
                        ></input>
                    </label>
                </div>
                <button className="bg-yellow-500 text-white uppercase w-96 py-3 mt-4 ml-3">
                    Login
                </button>
            </form>
            <p className="text-xs mb-0">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </div>
    )
}
export default Loginfrom