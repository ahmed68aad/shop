import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, sendEmailVerification ,deleteUser} from 'firebase/auth';
import { auth } from '../../services/index'; 



function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message , setMessage] = useState('')
  const [error , setError] =useState('')
  const [resendEmail ,setResendEmail] =useState('')

  const passwordRef = useRef()
  const repeatPasswordRef =useRef()


const handleSignUp =  async (event) => {
    event.preventDefault();
    setMessage('')
    setError('')
    if(passwordRef.current.value===repeatPasswordRef.current.value){
      try {
        const userCredential = await createUserWithEmailAndPassword (auth, email, password);
        await sendEmailVerification(userCredential .user);
        setMessage('Registration successful! Please check your email to verify your account.');
        setResendEmail(<><br/><Link to='/resend-verification'>click here</Link>&nbsp; to resend email verification</>)
  
      } catch (error) {
        if (auth.currentUser) {
          await deleteUser(auth.currentUser);  
        }
        if (error.code === 'auth/invalid-email') {
          setError('Invalid email address.');
        } else if (error.code === 'auth/user-disabled') {
          setError('User disabled.');
        } else if (error.code === 'auth/email-already-in-use') {
          setError('This account already existed!');
        } else if (error.code === 'auth/wrong-password') {
          setError('Incorrect password.');
        } else {
          setError('Error signing Up: ' + error.message);
        }
      }
    }
    else {
      setError('You Inputed Two Different Passwords!')
    }


  };
    return (
    <>
<section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body">
          <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome</p>

                <p className='text-center fw-bold mb-f mx-1 mx-md-4 mt-4 text-success'>{message}{resendEmail}</p>

                <p className='text-center fw-bold mb-f mx-1 mx-md-4 mt-4 text-danger'>{error}</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" placeholder="Enter Your Name" required/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" placeholder="Enter Your PassWord" ref={passwordRef} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" placeholder="Repeat Your Password" ref={repeatPasswordRef} required/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={handleSignUp}>Register</button>
                  </div>
                  <p>You already have an account?  
                  &nbsp; <Link className="text-primary"  to={'/signin'}>Sign In</Link>
                  </p>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>);
}

export default SignUp;