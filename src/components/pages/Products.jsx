import { useEffect, useState } from "react";
import { getProducts } from "../../services";
import { Link } from "react-router-dom";


function Products() {

    const [products ,setProducts] =useState([]);

    useEffect(() => {
        getProducts()
        .then(res => res.json())
        // .then(data => console.log(data.products))
        .then(data =>setProducts(data.products))
        .catch(err => err.message)
    } , [])

    return (
<>
<section style={{backgroundColor:" #eee"}}>
<div className="text-center container py-5">
<div className="row">
{
 products.length>0 && products.map((product)=> (
  
<div className="col-lg-4 col-md-12 mb-4" key={product.id}>
  <div className="card">
  <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
    data-mdb-ripple-color="light">
      
      <img src={product.images[0]}
      className="w-100" 
      alt={product.title}/>
      
    <a href="#!">
      <div className="mask">
        <div className="d-flex justify-content-start align-items-end h-100">
          <h5><span className="badge bg-warning ms-2">{product.stock}</span></h5>
        </div>
      </div>
      <div className="hover-overlay">
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </div>
    </a>
  </div>
  <div className="card-body">
    <Link to={`/details/${product.id}`} className="text-rese text-decoration-none">
      <h5 className="card-title mb-3 fw-bold text-dark">{product.title}</h5>
    </Link>
    <a href="" className="text-reset text-decoration-none text-secondary">
      <p>{product.category}</p>
    </a>
    <h6 className="mb-3 fw-bold text-success">${product.price}</h6>
  </div>
</div>
</div>
)) 
}
</div>
</div>
</section>
</>
);
}

export default Products;