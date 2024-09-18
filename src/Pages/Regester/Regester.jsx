import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Regester = () => {
    
     const {createUser}=useContext(AuthContext)
     
    const handleRegester = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        console.log(form);
        console.log(form.get('inpt'));

        const name=form.get('name');
        const photo =form.get('inpt');
        const email= form.get('email');
        const password = form.get('password');

        console.log(name,email,password,photo);
        
        //create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })

    }



    return (
        <div>
                        <Navber></Navber>
            <h2 className="text-3xl"> this is Regester components</h2>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
 
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegester} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="enter your name" className="input input-bordered" required />
                            </div>
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

  <input type="file" placeholder="add file" name="inpt" className="file-input file-input-bordered w-full max-w-xs" />


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p>already have an account? <Link to ='/login'>Login </Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regester;