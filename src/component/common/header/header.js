import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand setImageHeightWidth" href="#"><img src="assets/headerImages/Logo.png" />   </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarDiv" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ForUl">
              <li className="nav-item d-flex">
                <div classNameName="address-icon">
                  <img src="/assets/images/location.svg" alt="location" />
                </div>


                <div classNameName="address-text">
                  <p>Deliver to</p>
                  <span>110093</span>
                </div>
              </li>

              <li className="nav-item ForInputBox">

                <form className="d-flex">
                  <input className="form-control" type="search" placeholder="Search essentials, groceries, and more …...." aria-label="Search" />
                  <button className="btn searchIcon" type="submit"><i classNameName="fa fa-search" aria-hidden="true"></i></button>
                </form>
              </li>
              <li>
                <i classNameName="fa fa-user-circle-o" aria-hidden="true"></i> Sign in / Sign up
            </li>
              <li>
                <i classNameName="fa fa-shopping-cart" aria-hidden="true"></i>
                 $0.00
            </li>
            </ul>



          </div>
        </div>
      </nav>
    </>

  );
}

export default Header;
{/* <header>
   
<div classNameName="logo">
  <div classNameName="logo-img-style">
    <img src="assets/images/Logo.svg" />
  </div>
  <div classNameName="logo-name-style">
    <img src="assets/images/Groceryio.svg" />
  </div>
</div>

<div classNameName="address">
  <div classNameName="address-icon">
    <img src="/assets/images/location.svg" alt="location" />
  </div>
  <div classNameName="address-text">
    <p>Deliver to</p>
    <span>110093</span>
  </div>
</div>

<div className="search-style">
  <div className="search-input">
    <input
      type="text"
      placeholder="Search essentials, groceries, and more..."
    />
  </div>
  <div className="search-icon">
    <button>
      <i className="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</div>

<div className="accout-style">
  <div className="user-account-style">
    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
    <p>Sign in / Sign up</p>
  </div>
</div>

<div className="bucket-style">
  <div className="user-bucket-style">
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    <p>$0.00</p>
  </div>
</div>
</header> */}