import { Col, Row, Card } from "react-bootstrap";
import PaginationComponent from "../pagination/pagination";
import { useStarbucksData } from "./util";
import SearchBar from "../search/searchBar";
import SearchList from "../search/searchList";
import SideBar from "../side-bar/side-bar";
import styles from "../../style/Detail.module.css";
const Menu = () => {
  const {
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
      <Row style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <Col md={2}>
          <SideBar
            regions={regions}
            selectedRegions={selectRegion}
            onRegionChange={handleRegionchange}
            grindOptions={grindOptions}
            selectedGrindOptions={selectedGrindOptions}
            onGrindChange={handleGrindChange}
            onClearFilters={handleClearFilter}
          />
        </Col>
        <Col md={9}>
          <SearchBar setResults={handleSearchBar} />
          <div className="container">
            <SearchList results={searchResults} />
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
                      className={styles.imageContainer}
                      style={{
                        width: "100%",
                        height: "12rem",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fs-6">{value.name}</Card.Title>
                      <div
                        className={styles.grid}
                        style={{ textAlign: "right" }}
                      >
                        {value.grind_option}
                      </div>
                      <Card.Text className={styles.price}>
                        {Math.floor(value.price * 36.64)} Bath
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="d-flex justify-content-center">
            <PaginationComponent
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Menu;
