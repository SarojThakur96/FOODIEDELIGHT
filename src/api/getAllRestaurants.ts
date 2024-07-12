import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RestaurantsType } from "../types/types";
import { baseUrl } from "../util/constant";

export const getAllRestaurants = async (): Promise<
  AxiosResponse<RestaurantsType[]>
> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `${baseUrl}/api/v1/restaurants/restaurants`,
  };
  const response: AxiosResponse<RestaurantsType[]> = await axios(config);
  console.log("GetRestaurants: ", response.data);
  return response;
};
