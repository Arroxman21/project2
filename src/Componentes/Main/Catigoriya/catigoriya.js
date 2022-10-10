import React from "react";
import "./Catigoriya.css"

export function Catigoriya(){
    return(
        <div className="Catigoriya">
            <p>Shop by</p>
            <h1>Catigories</h1>

            <div className="row1">
                <button className="btn_left"> \ </button>

                <div className="card1">
                 <img src="img/gamburger.png" alt="" />
                 <span>Snacks</span>
                </div>

                <div className="card1">
                 <img src="img/savatcha.png" alt="" />
                 <span>Grocery & Staples</span>
                </div>

                <div className="card1">
                 <img src="img/olma.png" alt="" />
                 <span>Vegetables & Fruits</span>
                </div>

                <div className="card1">
                 <img src="img/milk.png" alt="" />
                 <span>Dairy & Eggs</span>
                </div>

                <div className="card1">
                 <img src="img/house2.png" alt="" />
                 <span>Home Care</span>
                </div>

                <div className="card1">
                 <img src="img/groceries.png" alt="" />
                 <span>Beverages</span>
                </div>
                <button className="btn_right"> / </button>
            </div>
        </div>
    )
}