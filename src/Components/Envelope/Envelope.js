import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Envelope.css";

const Envelope = () => {
  const [flipped, setFlipped] = useState(false);
  const [open, setOpen] = useState(false);

  let history = useHistory();

  const flip = () => {
    setFlipped((st) => !st);
  };

  const coverOpen = () => {
    // setOpen((st) => !st);
    history.push("/menu");
  };

  return (
    <div className="bg">
      <div className="card">
        <div className={`flip-box`}>
          <div className={`flip-box-inner  ${flipped ? "flip" : ""}`}>
            <div className={`flip-box-front`} onClick={() => flip()}>
              <h1>Please Click</h1>
            </div>
            <div className="flip-box-back">
              <div
                className={`
                mail 
                `}
                onClick={() => coverOpen()}
              >
                <div className={`cover`}> </div>
                <div className="image"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
