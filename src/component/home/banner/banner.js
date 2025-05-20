import React from "react";
import "./banner.css";
function Banner() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/images/BackgroundGrocery.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/images/BackgroundGrocery.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/images/BackgroundGrocery.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <button className="shopNow" style={{ width: "133.09px" }}> Shop Nows</button>

      <div className="container-fluid divForCard">
      <div className="card" style={{ width:"235px",height:"210px",borderRadius: "11.8906px" }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
            <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
            <h5 className="card-title">Easy Return</h5>
            <p className="card-subtitle mb-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

          </div>
        </div>
        <div className="card" style={{ width:"235px",height:"210px",borderRadius: "11.8906px" }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
            <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
            <h5 className="card-title">Easy Return</h5>
            <p className="card-subtitle mb-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

          </div>
        </div>
        <div className="card" style={{ width:"235px",height:"210px",borderRadius: "11.8906px" }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
            <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
            <h5 className="card-title">Easy Return</h5>
            <p className="card-subtitle mb-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

          </div>
        </div>
        <div className="card" style={{ width:"235px",height:"210px",borderRadius: "11.8906px" }}>
          <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
            <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
            <h5 className="card-title">Easy Return</h5>
            <p className="card-subtitle mb-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

          </div>
        </div>
      </div>

    </>

  );
}

export default Banner;
{/* <div className="banner-container">
      <div
        className="banner"
        style={{
          backgroundImage: `url("/assets/images/BackgroundGrocery.png")`,
        }}
      >
        <button className="ShopNowButton">Shop now</button>
        
        <div className="smallCard" style={{marginLeft: "190px"}}>
              <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
              <p className="P1">Easy Return</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
        <div className="smallCard" style={{marginLeft: "482px"}}>
              <img src="/assets/images/purchase.png" className="ForImage"></img>
              <p className="P1">Easy Return</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          <div className="smallCard" style={{marginLeft: "776px"}}>
              <img src="/assets/images/SameDayDelivery.png" className="ForImage"></img>
              <p className="P1">Same Day Delivery</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          <div className="smallCard" style={{marginLeft: "1070px"}}>
          <img src="/assets/images/sustainable.png" className="ForImage"></img>
              <p className="P1">Original & Organic</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
        
   
      </div>
    </div> */}