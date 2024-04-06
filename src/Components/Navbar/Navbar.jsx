import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then((res)=>{
            console.log(res)
            console.log("Logged Out Successfully")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const navLink = <>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/orders'>Orders</NavLink></li>
    </>

    return (
        <div>
           <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        navLink
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Private Router</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div>
                    <a onClick={handleLogout} className="btn">Sign Out</a> <br></br>
                    <span>{user.email}</span> 
                </div> : <Link to='/login'>
                <button className="btn btn-secondary" >Join Us</button>
                </Link>
                }
               
            </div>
            </div>
        </div>
    );
};

export default Navbar;