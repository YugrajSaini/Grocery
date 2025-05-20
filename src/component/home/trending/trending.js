import React, { useState, useRef } from "react";
import "./trending.css";
import Slider from "react-slick";


function Trending() {

    const slider = useRef();
    const [trendingList, setTrendingList] = useState([
        {
            productImage: "/assets/TrendingImages/vegetable.png",
            category: "Fruits & Vegetables",
        },
        {
            productImage: "/assets/TrendingImages/milk.jpeg",
            category: "Dairy & Bakery",
        },
        {
            productImage: "/assets/TrendingImages/flour.jpeg",
            category: " Staples & Flours",
        },
        {
            productImage: "/assets/TrendingImages/cookies.jpeg",
            category: "Snacks &  Biscuits",
        },
        {
            productImage: "/assets/TrendingImages/kitchen.jpeg",
            category: "Kitchen Essentials",
        },
        {
            productImage: "/assets/TrendingImages/spices.jpeg",
            category: "Masalas & Spices",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Edible Oils",
        },

    ])

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };


    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };


    return (
        <>
            <div style={{ margin: "2rem" }}>
                <div className="d-flex justify-content-between" style={{ width: "95%" }}>
                    <p style={{
                        fontSize: "18px",
                        fontWeight: "500"
                    }}>Trending Categories</p>
                    <div className="ButtonDiv">
                        <button onClick={previous} className="cssForButtons"> <i className="fa fa-angle-left" style={{ color: "#F28505" }}></i> </button>
                        <button onClick={next} className="cssForButtons"> <i className="fa fa-angle-right" style={{ color: "#F28505" }}></i> </button>
                    </div>

                </div>

                <Slider ref={(c) => (slider.current = c)} {...settings} className="ForSlider">

                    {trendingList.map((ele) => {
                        return (
                            <div className="Card">
                                <div className="CardImg">
                                    <img src={ele.productImage}></img>
                                </div>
                                <p>
                                    {ele.category}
                                </p>
                            </div>
                        )
                    })}



                </Slider>

            </div>
        </>
    )
}
export default Trending











// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/milk.jpeg"></img>
// </div>
// <p>
//     Dairy & Bakery
//  </p>
// </div>
// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/flour.jpeg"></img>
// </div>
// <p>
//     Staples & Flours
// </p>
// </div>
// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/cookies.jpeg"></img>
// </div>
// <p>
//     Snacks &  Biscuits
// </p>
// </div>
// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/kitchen.jpeg"></img>
// </div>
// <p>
//     Kitchen Essentials
// </p>
// </div>
// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/spices.jpeg"></img>
// </div>
// <p>
//     Masalas & Spices
// </p>
// </div>
// <div className="Card">
// <div className="CardImg">
//     <img src="/assets/TrendingImages/oil.jpeg"></img>
// </div>
// <p>
//     Edible Oils
// </p>
// </div>


// ==================================================================================
{/* <div className="MainDivOfTrending">
<div>
    <p>Trending Categories</p>
    <div className="ForPaginationButton">
        <button>{`<`}</button>

        <button>{`>`}</button>

    </div>
</div>
<div>


<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/vegetable.png"></img>
    </div>
    <p>
        Fruits & Vegetables
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/milk.jpeg"></img>
    </div>
    <p>
    Dairy & Bakery
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/flour.jpeg"></img>
    </div>
    <p>
    Staples & Flours
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/cookies.jpeg"></img>
    </div>
    <p>
    Snacks &  Biscuits
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/kitchen.jpeg"></img>
    </div>
    <p>
    Kitchen Essentials
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/spices.jpeg"></img>
    </div>
    <p>
    Masalas & Spices
    </p>
</div>
<div className="Card">
    <div className="CardImg">
        <img src="/assets/TrendingImages/oil.jpeg"></img>
    </div>
    <p>
    Edible Oils
    </p>
</div>
</div>

</div> */}