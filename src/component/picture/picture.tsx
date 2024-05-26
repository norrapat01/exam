import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./ImageSlider.css"; // Ensure you import the CSS file
import { CustomNextArrow, CustomPrevArrow } from "./arrow";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [showSlider, setShowSlider] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    initialSlide: currentIndex,
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [showSlider]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowSlider(true);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          onClick={() => handleImageClick(index)}
          style={{
            width: "100px",
            height: "auto",
            margin: "5px",
            cursor: "pointer",
          }}
        />
      ))}
      {showSlider && (
        <div>
          <button onClick={() => setShowSlider(false)}>Close</button>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
