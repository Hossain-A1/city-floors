import { orderType } from "./ordersType";


export type productType= {
  _id:string;
  title: string;
  description: string;
  about:string;
  category: string;
  images: string[];
  price: number;
  stock:number;
  rating:number;
  count:number;
  orders: orderType[];
  createdAt:string;
  updatedAt:string;
  __v:number
  
  
} 