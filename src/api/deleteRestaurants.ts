import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RestaurantsType } from "../types/types";
import { baseUrl } from "../util/constant";

export const deleteRestaurants = async (
  id: string
): Promise<AxiosResponse<RestaurantsType>> => {
  const config: AxiosRequestConfig = {
    method: "put",
    url: `${baseUrl}/api/v1/restaurants/restaurants/${id}`,
  };
  const response: AxiosResponse<RestaurantsType> = await axios(config);
  console.log("DelRestaurants: ", response.data);
  return response;
};
