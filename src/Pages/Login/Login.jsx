import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {signIn}=useContext(AuthContext);
    const location =useLocation();
    const navigate= useNavigate()


    console.log('location in the log in page is'
        ,location);
    
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        console.log(form);
        console.log(form.get('email'));

        const email=form.get('email');
        const password =form.get('password');
        console.log(email,password);

        signIn(email,password)
           .then(result  => {
            console.log(result.user);
            
            // navigate afte login 
            
           navigate(location?.state ? location.state : '/');

           })
           .catch(error => {
            console.error(error);
           })


    }

    return (
        <div>
            <Navber></Navber>
            <h2 className="text-3xl"> this is Loging components</h2>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
 
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                       
                        <form onSubmit={handleLogin} className="card-body">
                         
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p>Dont have an account? <Link to ='/regester'>Regester </Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;