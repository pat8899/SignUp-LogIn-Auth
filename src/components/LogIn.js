import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import Roundcircle from "./Roundcircle.png";
import "./LogIn.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
  
    <div className="LoginContainer">
        <div className="container">
            <div className="row">

              <div className="col">
                 <div className="container mt-5">
                     <h4 className="LoginSmallHeader">Welcome back to levelUp Works</h4>
                     <h1 className="LoginHeader">Student Portal </h1>
                     <h1 className="LoginHeader2">Log In</h1>
                     <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label for="exampleInputEmail1" className="form-label">
                        </label>
                        <input
                         type="email"
                         name="email"
                         placeholder="Email"
                         className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                         />
                     </div>

                     <div className="mb-3">
                         <label for="exampleInputPassword1" className="form-label">
                         </label>
                         <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            id="exampleInputPassword1"
                         />
                    </div>

                     <div class="mb-3">
                         <div class="form-check">
                         <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                         <label class="form-check-label" for="dropdownCheck">
                            Remember me           
                         </label>
                         <p className="ForgotPw">Forgot Password</p>
                        </div>
                    </div>

                    <div class="mb-3">
                    </div>
                        <button type="submit" className="btn btn-secondary col-12">
                            Login
                        </button>
                    <Link to="/SignUp">
                    <a class="dropdown-item" href="#">Create Account</a>
                    </Link>
                  </form>
                </div>
            </div>

            <div class="col">
              <img
                src={Roundcircle}
                className="LoginImg"
                alt="Roundcircle"
              ></img>
            </div>

        </div>
    </div>
  </div>

           


       
        
      
   
  );
};

export default LogIn;
