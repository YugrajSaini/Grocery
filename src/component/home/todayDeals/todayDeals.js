import React, { useState, useRef } from "react";
import "./todayDeals.css";
import Slider from "react-slick";
function TodayDeals() {

    const slider = useRef();
    const [todayList, setTodayList] = useState([
        {
            productImage: "/assets/TrendingImages/vegetable.png",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/milk.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/flour.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/cookies.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/kitchen.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/spices.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },

    ])
    var settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
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
                    }}>Today Deals</p>
                    <div className="ButtonDiv">
                        <button onClick={previous} className="cssForButtons"> <i className="fa fa-angle-left" style={{ color: "#F28505" }}></i> </button>
                        <button onClick={next} className="cssForButtons"> <i className="fa fa-angle-right" style={{ color: "#F28505" }}></i> </button>
                    </div>

                </div>

                <Slider ref={(c) => (slider.current = c)} {...settings} className="ForSlider1">

                    {todayList.map((ele) => {
                        return (
                            <div className="d-flex justify-content-between CardToday">
                                <div className="CardImgToday">
                                    <img src={ele.productImage}></img>
                                </div>
                                <p>
                                    {ele.category}
                                </p>
                                <div className="PriceAndAdd">
                                    <div className="OnlyForPriceDiv">
                                        <p className="CurrentPrice"><span>&#8377; </span> {ele.currentPrice}</p>
                                        <p className="PreviousPrice" style={{ fontSize: "12px" }}><span>&#8377; </span>{ele.PreviousPrice}</p>
                                    </div>
                                    <button className="AddButton">Add+</button>
                                </div>




                            </div>




                        )
                    })}



                </Slider>

            </div>

        </>
    )
}
export default TodayDeals

{/* <div className="MainDivOfToday">
<div>
    <p>Today Deals</p>
    <div className="ForPaginationButton">
        <button>{`<`}</button>

        <button>{`>`}</button>

    </div>
</div>

<div style={{    marginTop: "2rem"}}>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/vegetable.png"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span> 104</p>
        <p className="PreviousPrice" style={{ fontSize: "12px"}}><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/milk.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/flour.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/cookies.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/kitchen.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>
    <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/spices.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div>

    ======================
    {/* <div className="CardToday">
        <div className="CardImgToday">
            <img src="/assets/TrendingImages/oil.jpeg"></img>
        </div>
        <p>
            Product name and details
            lorem imspsum  200
    </p>
    <div className="PriceAndAdd">
        <div className="OnlyForPriceDiv">
        <p><span>&#8377; </span>104</p>
        <p className="PreviousPrice"><span>&#8377; </span>120</p>
        </div>
        <button className="AddButton">Add+</button>
    </div>
    </div> 
    ============
</div>

</div> */}