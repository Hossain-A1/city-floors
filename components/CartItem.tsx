"use client";

import { CurrencyFormatter } from "../components/CurrencyFormatter";
import Button from "@/components/ui/Button";
import {
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "../redux/features/cart/CartSlice";
import { productType } from "@/types/productsType";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface CartItemProps {
  addedCart: productType;
}

const CartItem: React.FC<CartItemProps> = ({ addedCart }) => {
  const dispatch = useDispatch();

  return (
    <section className=''>
      <div className='grid lg:grid-cols-7 grid-cols-1 text-center items-center gap-5 border py-3 px-2'>
        <div>
          <strong className='max-md:hidden'>
            {addedCart?._id?.substring(0, 10)}
          </strong>
        </div>
        <div className='flex  justify-start items-center col-span-2 gap-5 '>
          <div className='overflow-hidden h-16 w-16 flex justify-center items-center'>
            <Image
              src={addedCart.images && addedCart.images[0]}
              alt={addedCart.title}
              height={280}
              width={280}
              priority
              className='h-full w-full object-cover '
            />
          </div>
          <div>
            <strong className=''>{addedCart?.title?.substring(0, 20)}</strong>
          </div>
        </div>

        <div className='flex items-center gap-5 bg-light/70 border lg:px-6 px-1 py-2 rounded-md max-md:w-24 w-32'>
          <button
            className='text-2xl font-semibold text-dark'
            onClick={() => dispatch(decreaseCart(addedCart._id))}
          >
            -
          </button>
          <strong className='lg:text-2xl font-semibold text-dark'>
            {addedCart.count}
          </strong>
          <button
            className='text-2xl font-semibold text-dark'
            onClick={() => dispatch(increaseCart(addedCart._id))}
          >
            +
          </button>
        </div>

        <div>
          <strong>
            <CurrencyFormatter amount={addedCart.price} />
          </strong>
        </div>

        <div>
          <strong>
            <CurrencyFormatter amount={addedCart.price * addedCart.count} />{" "}
          </strong>
        </div>

        <div>
          <Button
            onClick={() => dispatch(removeFromCart(addedCart._id))}
            variant='danger'
          >
            Remove
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
