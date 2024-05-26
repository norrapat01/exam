import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchStarbucksDataByName,
  fetchStarbucksDataByOption,
} from "src/api/api.route";
import { Item, ProductItem } from "src/interface/ProductItem";
import { getAllProduct } from "src/service/service";
import {
  useStarbucksService,
  useStarbucksServiceByName,
} from "src/service/starbuck";

export const useStarbucksData = (input: string = "") => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const [productItems, setProductItems] = useState<ProductItem[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrindOptions, setSelectedGrindOptions] = useState<string>("");
  const [selectRegion, setSelectRegion] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        setProductItems(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/detail?id=${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchBar = (results: Item[]) => {
    setSearchResults(results);
  };

  const handleSearch = () => {
    if (!productItems) return [];
    return productItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const handleGrindChange = (grindOption: string) => {
    setSelectedGrindOptions(grindOption);
    setCurrentPage(1);
  };

  const handleRegionchange = (region: string) => {
    setSelectRegion(region);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSelectRegion("");
    setSelectedGrindOptions("");
    return false;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectRegion, selectedGrindOptions]);

  const filteredProductItems = handleSearch().filter((item) => {
    if (selectRegion.length > 0 && !selectRegion.includes(item.region))
      return false;
    if (
      selectedGrindOptions.length > 0 &&
      !selectedGrindOptions.includes(item.grind_option)
    )
      return false;
    return true;
  });

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductItems.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProductItems.length / itemsPerPage);

  const regions = Array.from(
    new Set(productItems?.map((item) => item.region) || []),
  );
  const grindOptions = Array.from(
    new Set(productItems?.map((item) => item.grind_option) || []),
  );

  return {
    starbucksData: currentItems,
    currentPage,
    totalPages,
    handleCardClick,
    handlePageChange,
    searchResults,
    handleSearch,
    filteredData: currentItems,
    handleGrindChange,
    handleRegionchange,
    handleSearchBar,
    selectRegion,
    selectedGrindOptions,
    handleClearFilter,
    setSelectedGrindOptions,
    setSelectRegion,
    grindOptions,
    regions,
    filteredProductItems: currentItems,
  };
};
