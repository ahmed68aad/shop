import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState} from "react";
import { shopContext } from "../../services/shopContext";
import "./Cart.css";

function Cart() {
  const { cartProducts, totalPrices, totalDiscounts } = useContext(shopContext);

  const numRef = useRef(Number);

   const [total , setTotal] = useState()
   const [discount , setdiscount] = useState()

   const handleChange = () => {
    setdiscount(totalDiscounts*numRef.current.value)
    setTotal(totalPrices*numRef.current.value)
  } 



  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shopping-cart" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase text-warning">Your products</h3>
                    {cartProducts.length > 0 && cartProducts.map((product) => (
                      <div className="d-flex align-items-center mb-5" key={product.id}>
                        <div className="flex-shrink-0">
                          {Array.isArray(product.images) && product.images.length > 0 ? (
                            <img src={product.images[0]} className="img-fluid" style={{ width: '100px' }} alt="Generic placeholder image" />
                          ) : (
                            <img src={product.images} className="img-fluid" style={{ width: '100px' }} alt="Generic placeholder image" />
                          )}
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end">
                            <i className="fas fa-times"></i>
                          </a>
                          <h5 className="text-dark">{product.title}</h5>
                          <h6 style={{ color: '#9e9e9e' }}>Brand: {product.brand}</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">{product.price}$</p>
                            <input type="number" className="w-25" ref={numRef} onChange={handleChange} defaultValue={1}/>
                          </div>
                        </div>
                      </div>
                    ))}
                    <hr className="mb-4 text-warning" style={{ height: '2px', opacity: 1 }} />
                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">{discount} $</p>
                    </div>
                    <div className="d-flex justify-content-between p-2 mb-2 bg-warning">
                      <h5 className="fw-bold mb-0">Total:</h5>
                      <h5 className="fw-bold mb-0">{total} $</h5>
                    </div>
                    <Link to="/products" className="text-decoration-none text-warning btn my-2 btn-outline-dark">
                      <i className="bi bi-arrow-left-short"></i>Back to shopping
                    </Link>
                  </div>
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                    <form className="mb-5">
                      <div data-mdb-input-init className="form-outline mb-5">
                        <input type="text" id="num" className="form-control form-control-lg" size="17" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                        <label className="form-label" htmlFor="num">Card Number</label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-5">
                        <input type="text" id="name" className="form-control form-control-lg" size="17" placeholder="Name On Card" />
                        <label className="form-label" htmlFor="name">Name on card</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-5">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="exp" className="form-control form-control-lg" placeholder="00/00" size="7" minLength="7" maxLength="7" />
                            <label className="form-label" htmlFor="exp">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div data-mdb-input-init className="form-outline">
                            <input type="password" id="pass" className="form-control form-control-lg" placeholder="***" size="1" minLength="3" maxLength="3" />
                            <label className="form-label" htmlFor="pass">Cvv</label>
                          </div>
                        </div>
                      </div>
                      <button type="button" data-mdb-button-init className="btn btn-success btn-block btn-lg">Buy now</button>
                      <h5 className="fw-bold mb-5" style={{ position: 'absolute', bottom: 0 }}></h5>
                    </form>
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

export default Cart;
