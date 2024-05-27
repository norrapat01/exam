import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { GreenCircle, useDetailData } from "../util";
import styles from "../../../style/Detail.module.css";
import ImageCarousel from "../../slidePicture/picture";

const Detail: React.FC = () => {
  const { starbucksData } = useDetailData();

  if (!starbucksData) {
    return <div>Loading product details...</div>;
  }

  const {
    image_url,
    name: productName,
    description,
    flavor_profile,
    grind_option,
    region,
    weight,
    roast_level,
    price,
    stock,
  } = starbucksData;

  return (
    <div className={styles.detailContainer}>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className={styles.detailCard}>
            <Card.Body>
              <Row>
                <Col md={5}>
                  <ImageCarousel images={[image_url]} />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Card.Title className={styles.detailTitle}>
                    {productName}
                  </Card.Title>
                  <Card.Text className={styles.grid}>{grind_option}</Card.Text>
                  <Card.Text className={styles.detailDescription}>
                    {description}
                  </Card.Text>
                  <h3 className={styles.detailHeading}>Coffee Detail</h3>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col md={6}>
                      <Card.Text className={styles.detailFlavor}>
                        <strong>Flavor Profile:</strong>
                        <br /> {flavor_profile.join(", ")}
                      </Card.Text>
                    </Col>
                    <Col md={6} className="text-right">
                      <Card.Text className={styles.detailGrind}>
                        <strong>Grind Options:</strong>
                        <br />
                        {grind_option}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col md={6}>
                      <Card.Text className={styles.detailText}>
                        <strong>Region:</strong>
                        <br />
                        {region}
                      </Card.Text>
                    </Col>
                    <Col md={6} className="text-right">
                      <Card.Text className={styles.detailText}>
                        <strong>Weight:</strong> <br />
                        {weight}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col md={6}>
                      <Card.Text className={styles.detailText}>
                        <strong>Roast Level:</strong> <br />
                        {GreenCircle(roast_level)}
                      </Card.Text>
                    </Col>

                    <Col md={6} className="text-right">
                      <Card.Text className={styles.detailText}>
                        <strong>Stock:</strong> <br />
                        {stock}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={11}>
                      <Card.Text className={styles.detailPrice}>
                        <strong>Price</strong>
                        <br />
                        {Math.floor(price * 36.64)} Baht
                      </Card.Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
