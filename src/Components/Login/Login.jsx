import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    // console.log(signInUser)

    const handleLogin  = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then((res)=>{
            console.log(res.user.email)
        })
        .catch((error) =>{
            console.log(error)
        })

    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div>
                        <h1 className="font-bold text-4xl">Login Now</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm px-10 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
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
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex my-5 items-center justify-center">
                            <p>New Here? Wanna Join  </p>
                            <button className="btn"><Link to="/register">Register</Link></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;