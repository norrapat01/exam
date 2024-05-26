import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import PaginationComponent from "../pagination/pagination";
import { useStarbucksData } from "./helper";
import SearchBar from "../search/searchBar";
import SearchList from "../search/searchList";
import SideBar from "../side-bar/side-bar";

const Menu = () => {
  const {
    starbucksData,
    currentPage,
    totalPages,
    handleCardClick,
    handlePageChange,
    searchResults,
    handleGrindChange,
    handleRegionchange,
    handleSearchBar,
    selectRegion,
    selectedGrindOptions,
    handleClearFilter,
    grindOptions,
    regions,
    filteredProductItems,
  } = useStarbucksData();
  console.log(filteredProductItems);
  return (
    <>
      <SearchBar setResults={handleSearchBar} />
      <div className="container">
        <SearchList results={searchResults} />
        <SideBar
          regions={regions}
          selectedRegions={selectRegion}
          onRegionChange={handleRegionchange}
          grindOptions={grindOptions}
          selectedGrindOptions={selectedGrindOptions}
          onGrindChange={handleGrindChange}
          onClearFilters={handleClearFilter}
        />
        <Row className="justify-content-center">
          {filteredProductItems?.map((value) => (
            <Col md={4} key={value.id}>
              <Card
                className="mb-4"
                onClick={() => handleCardClick(value.id)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={value.image_url}
                  style={{ width: "100%", height: "12rem", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{value.name}</Card.Title>
                  <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                    {value.grind_option}
                  </div>
                  <Card.Text>Price: ${value.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Menu;
