import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
const ResponsiveContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Container fluid>
        <div className="detail">
          <div className="row">
            <div className="col">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card className="border-0 h-auto d-flex justify-content-center px-4 py-5 pt-5">
                  <Row>
                    <Col md={12}>{children}</Col>
                  </Row>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResponsiveContainer;
