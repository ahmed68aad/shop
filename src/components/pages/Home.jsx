import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../assets/shop.avif'

function Home() {
  return (
    // <div>
    //   <h1>Welcome to the Home Page</h1>
    //   <Link to="/signin">Sign In</Link>
    //   <br />
    //   <Link to="/signup">Sign Up</Link>
    // </div>


    <section className="py-5" style={{backgroundColor: "#eee"}}>
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome to <span className='text-warning fw-bold'>Your Shop </span>!</p>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 gap-2">
                  <p>Please, <Link to={"/signin"} className='text-warning'>Sign in</Link> to start shopping, if you don't have account <Link to={"/signup"} className='text-warning'>create one</Link></p>
                </div>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={homeImage}
                  className="img-fluid rounded" alt="Sample image"/>
              </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
  );
}

export default Home;
