import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import signImage from '../../assets/images.png'




function SignIn() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message ,setMessage] =useState('')
    const [error ,setError] =useState('')

  const navigate = useNavigate()


    const handleSignIn = async (event) => {
        event.preventDefault();
        setMessage('')
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          if (userCredential.user.emailVerified) {
            setError('')
            setMessage('Signed in successfully!');
            setTimeout(()=>{navigate('/products')} , 2000)
          } else {
            setError('Please verify your email before signing in.');
          }
        } catch (error) {
          if (error.code === 'auth/invalid-email') {
            setError('Invalid email address.');
          } else if (error.code === 'auth/invalid-credential') {
            setError('Not match any account.');
          } else if (error.code === 'auth/user-not-found') {
            setError('User not found.');
          } else if (error.code === 'auth/wrong-password') {
            setError('Incorrect password.');
          } else {
            console.log('Error signing in: ' + error.message);
          }
        }
      };


    return (
<>
<section className="py-5" style={{backgroundColor: "#eee"}}>
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome Back!</p>

                <p className='text-center fw-bold mb-f mx-1 mx-md-4 mt-4 text-danger' >{error}</p>
                <p className='text-center fw-bold mb-f mx-1 mx-md-4 mt-4 text-success'>{message}</p>


                <form className="mx-1 mx-md-4">


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" placeholder="Enter Your PassWord" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg text-warning" onClick={handleSignIn}>Sign In</button>
                  </div>

                  <p>Create new account?  
                  &nbsp; <Link className="text-warning"  to={'/signup'}>Sign Up</Link>
                  </p>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={signImage}
                  className="img-fluid rounded mx-auto " alt="Sample image"/>
              </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
</>
);
}

export default SignIn;