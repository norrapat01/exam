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

  return (
    <>
      <Row>
        <Col xs={12} md={3} style={{ paddingLeft: "80px" }}>
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
        <Col xs={12} md={8}>
          <SearchBar setResults={handleSearchBar} />
          <div className="container">
            <SearchList results={searchResults} />
            <Row className="justify-content-center m-lg-5" xs={1} md={2} lg={3}>
              {filteredProductItems?.map((value) => (
                <Col md={4} key={value.id}>
                  <Card
                    className={styles.menu}
                    onClick={() => handleCardClick(value.id)}
                  >
                    <Card.Img
                      variant="top"
                      src={value.image_url}
                      className={styles.imageContainer}
                      style={{
                        width: "auto",
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
                        {Math.floor(value.price * 36.64)} Baht
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
