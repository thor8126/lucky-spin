import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const CouponWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  console.log(prize);
  const wheelRef = useRef(null);

  const startSpinning = () => {
    if (!spinning) {
      setPrize("");
      setShowPopup(false);

      let rotationAngle;
      let selectedPrize = "";

      if (spinCount === 0) {
        rotationAngle = 5700;
        selectedPrize = "Try Again";
        setSpinCount(1);
        setSpinning(true);
      } else {
        const prizes = ["Gift Card", "50% Off"];
        const randomIndex = Math.floor(Math.random() * 2);
        selectedPrize = prizes[randomIndex];
        if (selectedPrize === "50% Off") {
          rotationAngle = 11610;
          setSpinning(true);
          setSpinCount(0);
        } else if (selectedPrize === "Gift Card") {
          rotationAngle = 6280;
          setSpinning(true);
          setSpinCount(0);
        }
      }

      setTimeout(() => {
        setPrize(selectedPrize);
        setShowPopup(true);
        setSpinning(false);
      }, 6600);

      gsap.to(wheelRef.current, {
        rotation: rotationAngle,
        duration: 6.2,
        ease: "power1.inOut",
        onComplete: () => {
          if (!spinning) {
            gsap.set(wheelRef.current, { rotation: rotationAngle });
          }
        },
      });
    }
  };

  return (
    <div className="container">
      <div
        className={`wheel ${spinning ? "spin-animation" : ""}`}
        ref={wheelRef}
      >
        <div className="center"></div>
        <div className="segment">
          <h1>Gift Card</h1>
        </div>
        <div className="segment2">
          <h1>50 % Off</h1>
        </div>
        <div className="segment3">
          <h1>Lose</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <button className="button-1" onClick={startSpinning} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>

      {showPopup && (
        <div className="popup">
          <div className="cookiesContent" id="cookiesPopup">
            {prize === "Gift Card" && (
              <>
                <img
                  src="https://www.pngmart.com/files/10/Amazon-Gift-Card-PNG-File.png"
                  alt="gift-card-img"
                />
                <br />

                <h2>Congrats!! You've won a amazon gift card!!</h2>
                <br />
                <code>Copy code:- XDV754SC42857DSS</code>
              </>
            )}
            {prize === "50% Off" && (
              <>
                <img
                  src="https://w7.pngwing.com/pngs/301/385/png-transparent-discounts-and-allowances-sales-coupon-advertising-online-shopping-others-text-trademark-retail-thumbnail.png"
                  alt="gift-card-img"
                />
                <br />

                <h2>50 % off on your next purchase!!</h2>
                <br />
                <code>Copy code:- NCVH54SDSF6AS4ASD</code>
              </>
            )}
            {prize === "Try Again" && (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
                  alt="gift-card-img"
                />
                <br />
                <h2>Oops!! {prize}</h2>
              </>
            )}

            <button className="accept" onClick={() => setShowPopup(false)}>
              Close!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponWheel;
