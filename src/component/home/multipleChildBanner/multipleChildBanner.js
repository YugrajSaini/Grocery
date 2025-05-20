import React, { useState, useRef } from "react";
import "./multipleChildBanner.css"
function MultipleChildBanner(){
    const [list, setTodayList] = useState([
        {
            productImage: "/assets/TrendingImages/vegetable.png",
            category: "Kitchen lorem impsum sample",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/milk.jpeg",
            category: "Fresh milk Lorem impsum Everday",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/flour.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
       
    ])
    
    return(
        <>
        <div className="container-fluid d-flex justify-content-around " style={{margin: "3% 0%"}}>
            {list.map((ele)=>{
                return(
                    <div className="MultipleCardChidDiv" style={{
                            backgroundImage: `url(${ele.productImage})`,
                        
                          }}>
                       
                   
                     jknnk
                    </div>
                )
            })}
        </div>
        </>
    )

}
export default MultipleChildBanner