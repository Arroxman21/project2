import React from "react";
import "./Catigoriya1.css"

export function Catigoriya1(){
    return(
        <div className="Catigoriya1">
            <p>Shop by</p>
            <h1>Catigories</h1>

            <div className="row2">

                <div className="carta1">
                    <h1>GET UP TO</h1>
                 <span>30% Off Every day</span>
                 <button className="btn_shop">Shop Now</button>
                </div>

                <div className="carta1">
                 <img src="img/savatcha.png" alt="" />
                 <span>Grocery & Staples</span>
                </div>

                <div className="carta1">
                 <img src="img/olma.png" alt="" />
                 <span>Vegetables & Fruits</span>
                </div>

     
            </div>
        </div>
    )
}