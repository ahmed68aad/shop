import { useState, useEffect  } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { getProduct } from "../../services";




function Details() {
  const [product, setProduct] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % (product.images ? product.images.length : 1)
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + (product.images ? product.images.length : 1)) % (product.images ? product.images.length : 1)
    );
  };

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-12 col-xl-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light">
                  <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-fade"
                  >
                    {/* Inner */}
                    <div className="carousel-inner">
                      {Array.isArray(product.images) && product.images.length > 0 ? (
                        product.images.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                          >
                            <img
                              src={image}
                              className="d-block w-100 p-5"
                              alt={`Slide ${index + 1}`}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active" key={product.id}>
                          <img
                            src={product.images}
                            className="d-block w-100"
                            alt="Default Slide"
                          />
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      onClick={prevSlide}
                    >
                      <span className="bi bi-caret-left-fill text-warning fs-3" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      onClick={nextSlide}
                    >
                      <span className="bi bi-caret-right-fill text-warning fs-3" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
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

                    <Link type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success" to={"/cart"}>Add To Cart</Link>

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