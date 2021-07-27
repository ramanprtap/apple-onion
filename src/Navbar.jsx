import React from 'react';


const Navbar = () => {
  return(
    <>
    <div className="navbar-dark">
    <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="product">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="offers">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="category">Category</a>
            </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
    </>
  )
}

export default Navbar;