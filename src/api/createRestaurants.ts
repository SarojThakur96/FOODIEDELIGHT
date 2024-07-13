import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RestaurantsType } from "../types/types";
import { baseUrl } from "../util/constant";

export const createRestaurants = async (
  data: Omit<RestaurantsType, "createdAt" | "id">
): Promise<AxiosResponse<RestaurantsType>> => {
  const config: AxiosRequestConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/restaurants/restaurants`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response: AxiosResponse<RestaurantsType> = await axios(config);
  console.log("GetRestaurants: ", response.data);
  return response;
};
