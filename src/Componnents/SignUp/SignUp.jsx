import React, { useContext } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser} = useContext(AuthContext)
    const handelSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        const confirm = form.password.value;
        console.log(email, password, confirm)
        setError('')
        if(password !==confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 chercter')
            return
        }
        createUser(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error =>{
          console.log(error)
          setError(error.message)
        })
    }
    return (
        <div className='form-container'>
        <h1 className='form-title'>SignUp</h1>
        <form onSubmit={handelSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
            </div>  
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
            </div>  
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm " id="" required />
            </div>  
            <input className='btn-submit' type="submit" value="SignUp" />
        </form>
        <p><small>Already have an account? <Link to='/login'>Login</Link> </small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;
