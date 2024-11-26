import {
  Blog,
  Cabin,
  Category,
  Link,
  Location,
  sidebarItem,
  slideImage,
} from "../types/types";
import { MdOutlineVilla } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { GiPalmTree, GiPartyPopper } from "react-icons/gi";
import { BsBuildings, BsTags, BsTree, BsJournals } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";

export const sliderImage: slideImage[] = [
  {
    id: 1,
    image: "/hero-1.jpg",
    path: "/",
  },
  {
    id: 2,
    image: "/hero-2.jpg",
    path: "/",
  },
  {
    id: 3,
    image: "/hero-3.jpg",
    path: "/",
  },
  {
    id: 4,
    image: "/hero-4.jpg",
    path: "/",
  },
  {
    id: 5,
    image: "/hero-5.jpg",
    path: "/",
  },
];

export const categories: Category[] = [
  { category: "vila", Icon: MdOutlineVilla },
  {
    category: "Custom",
    Icon: BsHouseDoor,
  },
  {
    category: "Home",
    Icon: BsHouseDoor,
  },
  {
    category: "Beach house",
    Icon: GiPalmTree,
  },
  {
    category: "Jungle cabin",
    Icon: BsTree,
  },
  {
    category: "apartment",
    Icon: BsBuildings,
  },
  {
    category: "Offers",
    Icon: BsTags,
  },
  {
    category: "night clubs",
    Icon: GiPartyPopper,
  },
];

export const locations: Location[] = [
  { location: "gorgan", images: "/chalos.jpg" },
  { location: "kordan", images: "/kordan.jpg" },
  { location: "chalos", images: "/chalos.jpg" },
  { location: "rasht", images: "/rasht.jpg" },
  { location: "tehran", images: "/tehran.jpg" },
  { location: "ramsar", images: "/ramsar.jpg" },
  { location: "tonekabon", images: "/tonekabon.jpg" },
  { location: "karaj", images: "/tehran.jpg" },
];

export const cabins: Cabin[] = [
  {
    id: 1,
    name: "jungle cabin - behesht",
    location: ["kordan", "rasht"],
    rate: 4.9,
    room: 2,
    bed: 2,
    price: 2000000,
    images: ["/cabin-1.jpg", "/cabin-2.jpg", "/cabin-3.jpg"],
  },
  {
    id: 2,
    name: " Switzerland cabin ",
    location: ["tonekabone", "ramsar"],
    rate: 5,
    room: 2,
    bed: 2,
    price: 3000000,
    images: ["/cabin2-1.png", "/cabin2-2.jpg", "/cabin2-3.jpg"],
  },
  {
    id: 3,
    name: " Switzerland cabin - Heaven-1",
    location: ["tehran", "kordan"],
    rate: 4.2,
    room: 2,
    bed: 2,
    price: 2500000,
    images: [
      "/cabin3-1.jpg",
      "/cabin3-2.jpeg",
      "/cabin3-3.jpeg",
      "/cabin3-3.jpeg",
    ],
  },
  {
    id: 4,
    name: "Apadana vila - Heaven-1",
    location: ["chalos", "kordan"],
    rate: 4.3,
    room: 2,
    bed: 2,
    price: 2500000,
    images: [
      "/cabin4-1.jpg",
      "/cabin4-2.jpg",
      "/cabin4-3.jpg",
      "/cabin4-3.jpg",
    ],
  },
  {
    id: 5,
    name: "jungle cabin - behesht",
    location: ["kordan", "rasht"],
    rate: 4.9,
    room: 2,
    bed: 2,
    price: 2000000,
    images: ["/cabin-1.jpg", "/cabin-2.jpg", "/cabin-3.jpg"],
  },
  {
    id: 6,
    name: " Switzerland cabin - Heaven-1",
    location: ["tehran", "kordan"],
    rate: 4.2,
    room: 2,
    bed: 2,
    price: 2500000,
    images: [
      "/cabin3-1.jpg",
      "/cabin3-2.jpeg",
      "/cabin3-3.jpeg",
      "/cabin3-4.jpeg",
    ],
  },
];
export const links: Link[] = [
  { id: 1, title: "kordan" },
  { id: 2, title: "tehran" },
  { id: 3, title: "rasht" },
  { id: 4, title: "chalos" },
  { id: 5, title: "ramsar" },
  { id: 6, title: "tonekabone" },
  { id: 7, title: "karaj" },
  { id: 8, title: "kish" },
  { id: 9, title: "qheshm" },
  { id: 10, title: "mashhad" },
  { id: 11, title: "vila" },
  { id: 12, title: "cabin" },
  { id: 13, title: "beach house" },
  { id: 14, title: "tabriz" },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Experience cooking",
    subtitle: "Experience cooking local foods",
    image: "/localCooking.jpg",
  },
  {
    id: 2,
    title: "Experience nature",
    subtitle: "Experience in nature",
    image: "/netural.jpg",
  },
  {
    id: 3,
    title: "city experience",
    subtitle: "One-day city tours",
    image: "/city.jpg",
  },
  {
    id: 4,
    title: "Experience local life",
    subtitle: "Experience life in the cities and villages of Iran",
    image: "/localLife.jpg",
  },
];

export const sidebarItems: sidebarItem[] = [
  { id: 1, title: "cites", Icon: BsBuildings, path: "cities" },
  { id: 2, title: "cabins", Icon: BsHouseDoor, path: "cabins" },
  { id: 3, title: "blogs", Icon: BsJournals, path: "blogs" },
  { id: 4, title: "locations", Icon: GrMapLocation, path: "locations" },
  { id: 5, title: "users", Icon: IoPeopleCircleOutline, path: "users" },
];
