import useFetch from "@/hooks/useFetch";
import { productType } from "@/types/productsType";
import Image from "next/image";
import Link from "next/link";
import Review from "../Review";
import { CurrencyFormatter } from "../CurrencyFormatter";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./Button";

const RelatedProducts = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {products &&
          products.slice(13,17).map((product: productType) => (
            <div key={product._id}>
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
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
