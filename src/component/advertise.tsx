import React from "react";
import { Card } from "react-bootstrap";
import image from "../image/reserve-coffee-2-1200x800.jpg";
import "./Advertise.css"; // Import CSS for styling

const Advertise: React.FC = () => {
  return (
    <div className="advertise">
      <div className="row">
        <div className="col position-relative">
          <div className="image-container">
            <img src={image} alt="Starbucks Reserve" className="img-fluid" />
            <div className="text-overlay">
              <h2 className="text-center">STARBUCKS RESERVE</h2>
              <p className="text-center">
                Since 1971, it always has been and will always be about quality.
                We’re passionate about ethically sourcing only the finest
                Arabica coffee beans and roasting them with great care. Our
                passion for coffee is rivaled only by our love of sharing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
