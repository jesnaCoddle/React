import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Component/HomePage/Home";
import LoginPage from "../Component/LoginPage/Login";
import RegisterPage from "../Component/RegisterPage/Register";
import RentPage from "../Component/RentPage/Rent";
import EquipmentBooking from "../Component/Bookings/BookingPage";
import { getToken } from "../utils/auth";
import AboutUs from "../Component/About/AboutUs";
import ContactUs from "../Component/Contact/Contact";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return getToken() ? children : <Navigate to="/login" />;
};

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to home */}
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rent" element={<PrivateRoute><RentPage /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
            <Route path="/book/:id" element={<PrivateRoute><EquipmentBooking /></PrivateRoute>} />
        </Routes>
    );
};

export default RouteComponent;