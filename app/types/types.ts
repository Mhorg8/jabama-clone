import { IconType } from "react-icons";

export interface slideImage {
  id: number;
  image: string;
  path: string;
}

export interface Category {
  category: string;
  Icon: IconType;
}

export interface Location {
  location: string;
  images: string;
}

export interface Cabin {
  id: string;
  location: string[];
  name: string;
  rate: number;
  room: number;
  bed: number;
  price: number;
  images: string[];
}
export interface Link {
  id: number;
  title: string;
}

export interface Blog {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
