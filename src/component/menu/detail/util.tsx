import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchStarbucksDataById,
  fetchStarbucksDataByName,
} from "src/api/api.route";
import { Item } from "src/interface/ProductItem";

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
