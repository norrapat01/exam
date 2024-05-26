import { useEffect, useState } from "react";
import {
  fetchStarbucksData,
  fetchStarbucksDataByName,
  fetchStarbucksDataByOption,
} from "src/api/api.route";
import { Item, ProductItem } from "src/interface/ProductItem";

export const useStarbucksService = () => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        data = await fetchStarbucksData();
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, []);

  return starbucksData;
};

export const useStarbucksServiceByName = (name?: string) => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStarbucksDataByName(name);
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, [name]);

  return starbucksData;
};
