import React from "react";
import "./headernavigation.css";
function HeaderNavigation() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid headerNavbarDiv">
        <a className="navbar-brand">Shop by Categories</a>
        <div className="collapse navbar-collapse navbarDiv" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBarUL">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Fruits & Vegetables
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Staples
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dairy & Bakery
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>


          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Snacks &  Biscuits
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Kitchen Essentials
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cleaning & Household
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

        </ul>
        </div>
        {/* </div> */}
      </div>
    </nav>

  );
}

export default HeaderNavigation;
{/* <nav>
      <ul classNameName="navigation-style">
        <li className="nav-heading">Shop by Categories</li>

        <li>
          Fruits & Vegetables
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Staples
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Dairy & Bakery <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Snacks & Biscuits
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Kitchen Essentials
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Cleaning & Household
          <i class="fa fa-angle-down" aria-hidden="true" />{" "}
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>
      </ul>
    </nav> */}