import { productType } from "./productsType";
import { userType } from "./userType";


export type orderType = {
  _id:string;
  user: userType;
  products: productType;
  createdAt:string;
  updatedAt:string;
  __v:number
}