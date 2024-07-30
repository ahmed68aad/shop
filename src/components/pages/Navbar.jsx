import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fw-bolder" href="#"><i className="bi bi-cart-dash-fill text-warning fs-1"></i> Your Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item m-1">
        <Link  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark"  to="/signin">Sign In</Link>
        </li>
        <li className="nav-item m-1">
        <Link  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark" to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;