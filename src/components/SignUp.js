import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../config'
import './SignUp.css'

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <div className="container mt-4">
                <div className="SignupPlaceholder">
               </div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3 col-6">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input type="email" name="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label for="exampleInputPassword1" className="form-label"></label>
                <input type="password" name="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="SignupGap"></div>
            <button type="submit" className="btn btn-secondary btn-log col-6">Submit</button>
            </form>
            </div>
        </>
    )
}

export default SignUp;