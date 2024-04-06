import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto mt-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;