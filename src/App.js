// import React, { useState} from "react";
// import Amazon from "./Componentes/Main/amazon";
// // import Navbar from "./components/navbar";
// import { Userbar } from "./Componentes/Userbar/Userbar";
// import Cart from "./Componentes/Main/cart";
// import { Catigoriya } from "./Componentes/Main/Catigoriya/catigoriya";
// import { Catigoriya1 } from "./Componentes/Main/Catigoriya1/Catigoriya1";
import { Bowl } from "./Bowlshop/Bowl";
import React from "react";

const App = () => {


  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <>
    <Bowl/>
    {/* // <React.Fragment>
    //   <Userbar setShow={setShow} size={cart.length} />
    //   <Catigoriya1/>
    //   <Catigoriya/>
    //   {show ? ( */}
    {/* //     <Amazon handleClick={handleClick} />
    //   ) : (
    //     <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    //   )}
    // </React.Fragment> */}
    </>
  );
};

export default App;
