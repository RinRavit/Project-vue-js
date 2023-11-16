import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => ({
    groups: [
      "Milks & Diaries",
      "Coffees & Teas",
      "Pet Foods",
      "Meats",
      "Vegetable",
      "Fruit",
    ],
    promotions: [
      {
        id: 1,
        title: "Everyday Fresh & Clean with Our Products",
        color: "#F0E8D5",
        image: new URL("../assets/images/Cms-04 1.png", import.meta.url),
      },
      {
        id: 2,
        title: "Make your Breakfast Healthy and Easy",
        color: "#F3E8E8",
        image: new URL("../assets/images/Cat-01 1.png", import.meta.url),
      },
      {
        id: 3,
        title: "The best Organic Products Online",
        color: "#E7EAF3",
        image: new URL("../assets/images/Cms-03 1.png", import.meta.url),
      },
      // {
      //   id: 2,
      //   title: "Make your Breakfast Healthy and Easy",
      //   color: "#F3E8E8",
      //   image: new URL("../assets/images/Cat-01 1.png", import.meta.url),
      // },
    ],
    categories: [
      {
        id: 1,
        group: "Milks & Diaries",
        name: "Cake & Milk",
        color: "#F2FCE6",
        image: new URL("../assets/images/cat-13 1.png", import.meta.url),
        item: "14",
      },
      {
        id: 2,
        group: "Fruits",
        name: "Peach",
        color: "#FFFCEB",
        image: new URL("../assets/images/cat-11 1.png", import.meta.url),
        item: "17",
      },
      {
        id: 3,
        group: "Fruits",
        name: "Organic Kiwi",
        color: "#ECFFEC",
        image: new URL("../assets/images/cat-12 1.png", import.meta.url),
        item: "21",
      },
      {
        id: 4,
        group: "Fruits",
        name: "Red Apple",
        color: "#FEEFEA",
        image: new URL("../assets/images/cat-9 1.png", import.meta.url),
        item: "68",
      },
      {
        id: 5,
        group: "Coffees & Teas",
        name: "Snack",
        color: "#FFF3EB",
        image: new URL("../assets/images/cat-3 1.png", import.meta.url),
        item: "34",
      },
      {
        id: 6,
        group: "Fruits",
        name: "Black plum",
        color: "#FFF3FF",
        image: new URL("../assets/images/cat-4 1.png", import.meta.url),
        item: "25",
      },
      {
        id: 7,
        group: "Vegetable",
        name: "Vegetables",
        color: "#F2FCE4",
        image: new URL("../assets/images/cat-1 4.png", import.meta.url),
        item: "65",
      },
      {
        id: 8,
        group: "Coffees & Teas",
        name: "Headphone",
        color: "#FFFCEB",
        image: new URL("../assets/images/cat-15 1.png", import.meta.url),
        item: "33",
      },
      {
        id: 9,
        group: "Coffees & Teas",
        name: "Cake & Milk",
        color: "#F2FCE4",
        image: new URL("../assets/images/cat-14 1.png", import.meta.url),
        item: "54",
      },
      {
        id: 10,
        group: "Fruit",
        name: "Orange",
        color: "#FFF3FF",
        image: new URL("../assets/images/cat-7 1.png", import.meta.url),
        item: "63",
      },
    ],
    products: [
      {
        id: 1,
        tag: "-17%",
        image: "...path to your image...",
        category: 3,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate: 4,
        description: "500 gram",
        sellPrice: "3",
        discountPercentage: 17,
        discountPrice: 0,
      },
    ],
    hellos:[
    {
      id: 1,
      image: new URL("../assets/images/cat-7 1.png", import.meta.url),
    },
    {
      id: 2,
      image: new URL("../assets/images/cat-7 1.png", import.meta.url),
    },
    {
      id: 3,
      image: new URL("../assets/images/cat-7 1.png", import.meta.url),
    }
      
    ]
  }),
  getter: {},
  action: {},
});