import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RestaurantsType } from "../types/types";
import { baseUrl } from "../util/constant";

export const updateRestaurants = async (
  data: Omit<RestaurantsType, "createdAt">
): Promise<AxiosResponse<RestaurantsType>> => {
  const config: AxiosRequestConfig = {
    method: "put",
    url: `${baseUrl}/api/v1/restaurants/restaurants/${data.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response: AxiosResponse<RestaurantsType> = await axios(config);
  console.log("updateRestaurants: ", response.data);
  return response;
};
