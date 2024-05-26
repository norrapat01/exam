import React from "react";
import { Pagination, Row, Col } from "react-bootstrap";


const PaginationComponent = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs="auto">
        <Pagination style={{border:"none"}}>
          <Pagination.First
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
                className={pageNumber === currentPage ? 'active-circle' : ''}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </Col>
    </Row>
  );
};

export default PaginationComponent;
