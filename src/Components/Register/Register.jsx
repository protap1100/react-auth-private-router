import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext); 
    
    const handleRegister  = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email,password,name)
        // create user in firebase 
        createUser(email,password)
        .then((res) =>{
            console.log(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div>
                            <h1 className="font-bold text-4xl">Register Now</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm px-10 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                            </div>
                        </form>
                        <div className="flex my-5 items-center justify-center">
                                <p>Already Have Account? </p>
                                <button className="btn"><Link to="/login">Login</Link></button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Register;