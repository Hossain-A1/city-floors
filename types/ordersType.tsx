import { droneType } from "./productsType";
import { userType } from "./userType";


export type orderType = {
  _id:string;
  user: userType;
  products: droneType;
  createdAt:string;
  updatedAt:string;
  __v:number
}