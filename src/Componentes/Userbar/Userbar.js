import React from "react";
import "./Userbar.css"

export function Userbar() {
    return(
      <div className="wrapper">

      <nav>
      <div className="nav1">
        <img src="img/konvert.png" />
        <p>Hello@colorlib.com  |  Free Shopping for all order of <b id="prise">$99</b></p>
        <div className="nav1_linklar">
        <img src="img/facebook.png" />
        <img src="img/whatsapp.png" />
        <img src="img/instagram.png" />
        <img src="img/twitter.png" /> 
        </div>

      </div> 

      
       <div className="nav2">
    
      <div className="nav2_left" >
      <img className="Logo" src="img/apple.png" />
      <select  id="countries">
          <option value="Gurugam">Gurugam</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Madakaskar">MAdakaskar</option>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>



        </select>
        <div className="input">
          <img src="img/lupa.png" alt="" />
      <input type={"text"} className="search" placeholder="Search for productes..."/>
      </div>
      </div>

      <div className="nav2_right">
          <img className="call" src="img/call.png"/>
        <p>+99890-699-20-05 <b>|</b></p>
        <img src="img/heart.png"/>
        <b>|</b>
        <img src=""/>
        <select name="Jhone Doe" id="users">
          <option value="xoji">Jhone Doe</option>
          <option value="Abu">Abu</option>

        </select>
      </div>
       </div>

       <div className="nav3">
        <div className="nav3_left">
        <div className="cotegories1">
          <img src="img/select.png" alt="" />
          <select  id="cotigories2">
            <option value="Select cotigories">Select cotigories</option>
            <option value="Select cotigories1">cotigories1</option>
            <option value="Select cotigories"> cotigories2</option>
           
          </select>
          </div>
          
          <div className="pages">
            <h1 className="Home">Home</h1>
            <h1 className="Prodact">Prodact</h1>  
            <h1 className="Stories">Stories</h1>
            <h1 className="Contact">contact</h1>


          </div>
        </div>

        <div className="nav3_right">
          <div className="Modal">
            <img src="img/karzinka.png" alt="" /> 
            <p>CART 2</p>
          </div>
        </div>
       </div>

      

     

      

      </nav>

      </div>
       
    )
    
}