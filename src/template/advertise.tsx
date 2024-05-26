import React from "react";
import image from "../assert/reserve-coffee-2-1200x800.jpg";
import "../style/Advertise.module.css"; // Import CSS for styling

const Advertise: React.FC = () => {
  return (
    <div className="advertise">
      <div className="row">
        <div className="col position-relative">
          <div className="image-container">
            <img
              src={image}
              alt="Starbucks Reserve"
              className="img-fluid"
              style={{
                opacity: "0.8",
                filter:
                  "brightness(100%) contrast(50%) grayscale(50%) sepia(20%)",
              }}
            />
            <div className="text-overlay">
              <div
                style={{
                  textAlign: "left",
                  color: "white",
                  marginLeft: "-150px",
                }}
              >
                <h2>STARBUCKS RESERVE</h2>
                <h6>
                  Since 1971, it always has been and will always be about
                  quality.
                  <br /> We’re passionate about ethically sourcing only the
                  finest <br />
                  Arabica coffee beans and roasting them with great care.
                  <br /> Our passion for coffee is rivaled only by our love of
                  sharing it.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
