import React, { useState } from "react";
import "./Envelope.css";

const Envelope = () => {
  const [flippeed, setFlippeed] = useState(false);

  const flip = () => {
    setFlippeed((st) => !st);
  };

  return (
    <div className="bg">
      <div className="card">
        <div className={`flip-box`}>
          <div
            className={`flip-box-inner ${flippeed ? "flip" : ""}`}
            onClick={() => flip()}
          >
            <div className="flip-box-front">
              <h1>Please Hover</h1>
            </div>
            <div className="flip-box-back">
              <div class="mail">
                <div class="cover"> </div>
                <div class="image"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
