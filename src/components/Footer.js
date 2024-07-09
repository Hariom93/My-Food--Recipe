import React from "react";
import logo from "../foodlogo.webp";

const Footer = () => {
   return (
      <div className="flex justify-evenly font-semibold lg:px-40 px-10 justify-center lg:w-full w-fit h-[32rem] bg-black gap-x-6
         text-gray-400 py-12 mt-16">
         <div className="lg:w-52 w-44 flex flex-col lg:gap-y-3 gap-y-1">
            <img src={logo} alt="" className="lg:w-32 w-24"></img>
            <p>© 2024 Bundl Technologies Pvt. Ltd</p>
         </div>
         <div className="flex flex-col lg:gap-y-3 gap-y-1 cursor-pointer">
            <h1 className="font-bold text-lg text-white ">Company</h1>
            <p>About</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Genie</p>
         </div>
         <div className="flex flex-col lg:gap-y-3 gap-y-1 cursor-pointer">
            <h1 className="font-bold text-lg text-white">Contact us</h1>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
            <h1 className="font-bold text-lg mt-8 text-white">Legal</h1>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>Investor Relations</p>
         </div>
         <div className="flex flex-col lg:gap-y-3 gap-y-1 cursor-pointer">
            <h1 className="font-bold text-lg text-white">We deliver to:</h1>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>
         </div>
      </div>
   )
}
export default Footer