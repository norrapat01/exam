import axios from "axios";
import { Item } from "src/interface/ProductItem";

const API_URL = "https://6650ac8dec9b4a4a6032f7e6.mockapi.io/api/Starbuck";

export const fetchStarbucksData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const fetchStarbucksDataById = async (id: Number) => {
  try {
    const response = await axios.get(`${API_URL}?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const fetchStarbucksDataByName = async (name?: string) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const fetchStarbucksDataByOption = async (
  options: string[] | Item[],
): Promise<Item[]> => {
  try {
    let grindOptions: string[];

    if (options.length > 0 && typeof options[0] === "object") {
      // Extract grind_option values if options are Item objects
      grindOptions = (options as Item[])
        .map((item: Item) => item.grind_option)
        .flat();
    } else {
      // Directly use the string array if options are strings
      grindOptions = options as string[];
    }

    const grindOptionQueryString = grindOptions.join(",");
    const response = await axios.get(
      `${API_URL}?grind_option=${grindOptionQueryString}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};
