import type { AxiosResponse } from "axios";
import httpClient from "./httpClient";

export interface Widget {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
}

export const getWidgets = async (): Promise<Widget[]> => {
  const { data } = await httpClient.get('/product-widgets') as AxiosResponse<Widget[]>;
  return data;
}