import React from "react";
import CouponWheel from "./components/CouponWheel";

function App() {
  return (
    <div className="App">
      <h3 className="header">Lucky Spin</h3>
      <CouponWheel />
      <div className="arrow"></div>
      <p className="footer">Note:- Please disable adblocker for popUp!</p>
    </div>
  );
}

export default App;
