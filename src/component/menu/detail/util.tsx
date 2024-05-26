import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchStarbucksDataById,
  fetchStarbucksDataByName,
} from "src/api/api.route";
import { useNavigate } from "react-router-dom";
import { Item, ProductItem } from "src/interface/ProductItem";
import { getAllProduct } from "src/service/service";

export const useDetailData = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const id = query.get("id");
  const name = query.get("name");
  const [starbucksData, setStarbucksData] = useState<Item | null>(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        if (id) {
          const response = await fetchStarbucksDataById(Number(id));
          const data = response[0];
          setStarbucksData(data);
        }
      } catch (error) {
        console.error("Error fetching Starbucks data by ID:", error);
      }
    };

    fetchDataById();
  }, [id]);

  useEffect(() => {
    const fetchDataByName = async () => {
      try {
        if (name) {
          const response = await fetchStarbucksDataByName(name);
          const data = response[0];
          setStarbucksData(data);
        }
      } catch (error) {
        console.error("Error fetching Starbucks data by name:", error);
      }
    };

    fetchDataByName();
  }, [name]);

  return { starbucksData };
};




export const useStarbucksData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const [productItems, setProductItems] = useState<ProductItem[] | null>(null);
  const [searchQuery] = useState("");
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
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProductItems.length / itemsPerPage);

  const regions = Array.from(
    new Set(productItems?.map((item) => item.region) || [])
  );
  const grindOptions = Array.from(
    new Set(productItems?.map((item) => item.grind_option) || [])
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
