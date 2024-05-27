import React from "react";
import { Card, Carousel } from "react-bootstrap";
import styles from "../../style/Detail.module.css";

const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Card>
            <Card.Img
              variant="top"
              src={image}
              className={styles.detailImage}
            />
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
