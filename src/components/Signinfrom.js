import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signinfrom = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({ phone: " ", name: "", email: "" })

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
        navigate("/");
        toast.success("Account create successfully")

    }

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5">
                <p className="text-3xl font-semibold ">Sign up</p>
                <div>
                    <NavLink to="/login">
                        <span>or </span><span className="text-yellow-500 font-semibold">login to your account</span>
                    </NavLink>
                    <img src="" alt=""></img>
                </div>
                <div className="border border-black w-10"></div>
                <form onSubmit={submitHandler}>
                    <div>
                        <input
                            type="text"
                            required
                            placeholder="Phone number"
                            className="mt-2 border  pl-5 py-5 w-96 outline-none ml-3"
                            name="phonepassword"
                            value={formData.password}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            className="mt-2 border  pl-5 py-5 w-96 outline-none ml-3"
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="email"
                            required
                            placeholder="Email Id"
                            className="mt-2 border  pl-5 py-5 w-96 outline-none ml-3"
                            name="email"
                            value={formData.password}
                            onChange={changeHandler}
                        ></input>
                    </div>
                    <p className="text-blue-500 text-sm font-semibold mt-6 mb-2 cursor-pointer hover:text-red-500 ml-3">Have a referral code?</p>
                    <button className="ml-3 bg-yellow-500 text-white uppercase w-96 py-3 mt-4 font-semibold text-sm">
                        Continue
                    </button>
                </form>
                <p className="text-xs mb-0 ml-3">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </>
    )
}
export default Signinfrom