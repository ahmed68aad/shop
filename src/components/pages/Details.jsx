import { useState } from "react";
import { getProduct } from "../../services";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {

const [product ,setProduct] =useState({});
const {id} = useParams();

useEffect(()=>{
  getProduct(id)
  .then(res => res.json())
  .then(data => setProduct(data))
  .catch(err => console.log(err))
} , [])

    return (
<>
  <section style={{backgroundColor: "#eee"}}>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{borderRadius: "15px"}}>
          <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={product.images}
              style={{borderTopLeftRadius: "15px" , borderTopRightRadius: "15px"}} className="img-fluid"
              alt={product.title} />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p><a href="#!" className="text-dark fw-bolder text-decoration-none">{product.title}</a></p>
                <p className="small text-muted">{product.description}</p>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="small text-muted fw-bold">{product.rating}</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p><a href="#!" className="text-dark fw-bold text-decoration-none">{product.price}</a></p>
              <p className="text-dark">%{product.discountPercentage} <span className="text-danger fw-bold">OFF</span></p>
            </div>
            <p className="small text-muted fw-bold">{product.shippingInformation}</p>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              <Link to={'/products'} className="text-dark fw-bold text-decoration-none"> Cancel</Link>
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Add To Cart</button>
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

export default Details;