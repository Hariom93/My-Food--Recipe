import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const cartItems = useSelector((state) => state.Cart);
    return cartItems.length > 0 ? children : <Navigate to="/" />;
};

export default ProtectedRoute