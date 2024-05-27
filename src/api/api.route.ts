import axios from "axios";
import { IProductItem, IStarbucksItem } from "src/interface/ProductItem";

const API_URL = "https://6650ac8dec9b4a4a6032f7e6.mockapi.io/api/Starbuck";

export const getStarbucksData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const getStarbucksDataById = async (id: Number) => {
  try {
    const response = await axios.get(`${API_URL}?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const getStarbucksDataByName = async (name?: string) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const getStarbucksDataByOption = async (
  options: string[] | IStarbucksItem[]
): Promise<IStarbucksItem[]> => {
  try {
    let grindOptions: string[];

    if (options.length > 0 && typeof options[0] === "object") {
      grindOptions = (options as IStarbucksItem[])
        .map((item: IStarbucksItem) => item.grind_option)
        .flat();
    } else {
      grindOptions = options as string[];
    }

    const grindOptionQueryString = grindOptions.join(",");
    const response = await axios.get(
      `${API_URL}?grind_option=${grindOptionQueryString}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};

export const getStarbucksAll = async (): Promise<IProductItem[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Starbucks data:", error);
    throw error;
  }
};
