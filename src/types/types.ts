export type RestaurantsType = {
  createdAt: string;
  name: string;
  address: string;
  description: string;
  image: string;
  id: string;
};

export type MenuItemsType = {
  id: number;
  icon: string;
  title: string;
  isSub: boolean;
  subItems: {
    id: number;
    title: string;
    path: string;
  }[];
  path?: string;
};
