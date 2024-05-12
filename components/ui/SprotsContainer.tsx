import { productType } from "@/types/productsType";
import Image from "next/image";
import Review from "../Review";
import { CurrencyFormatter } from "../CurrencyFormatter";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./Button";

interface SprotsContainerProps {
  product: productType;
}

const SprotsContainer: React.FC<SprotsContainerProps> = ({ product }) => {
  return (
    <div className='flex flex-col gap-1 '>
      
    {/* products will come from api */}
    <Link
      href={`/shop/${product._id}`}
      className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full block '
    >
      <Image
        src={product.images[0]}
        alt='hero image'
        priority
        height={720}
        width={1280}
        className='h-full w-full object-fill '
      />
    </Link>
    <div className='flex flex-col items-center gap-2.5 '>
      <small>{product.category}</small>
      <h4>{product.title}</h4>
      <h4>{<Review rate={product} />}</h4>
      <b>{<CurrencyFormatter amount={product.price} />}</b>
      <Link
        href={`/shop/${product._id}`}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        view details
      </Link>
    </div>
  </div>
  );
};

export default SprotsContainer;
