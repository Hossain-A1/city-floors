"use client";
import ShopSlider from "@/components/ShopSlider";
import ClothesContainer from "@/components/ui/ClothesContainer";
import ElectronicContainer from "@/components/ui/ElectronicContainer";
import Error from "@/components/ui/Error";
import FoodsContainer from "@/components/ui/FoodsContainer";
import Loading from "@/components/ui/Loading";
import OperatingContainer from "@/components/ui/OparatingContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import SportsContainer from "@/components/ui/SprotsContainer";
import useFetch from "@/hooks/useFetch";
import useProductSearch from "@/hooks/useProductSearch";
import { productType } from "@/types/productsType";
import { GiThreeLeaves } from "react-icons/gi";

const ShopPage = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  const { filteredProduct } = useProductSearch(products || []);

  if (isLoading) {
    return <Loading />;
  }

  const categoryComponentMap = {
    Foods: FoodsContainer,
    Operating: OperatingContainer,
    Electronics: ElectronicContainer,
    Clothes: ClothesContainer,
    Sports: SportsContainer,
  };

  return (
    <div className=' flex flex-col h-full sp '>
      <div className="h-[100vh] relative ">
        <ShopSlider />
      </div>
      {products && (
        <div className='flex flex-col h-full '>
          {Object.entries(categoryComponentMap).map(([category, Component]) => (
            <div key={category} className='flex flex-col items-center  sp'>
              <SectionTitle title={category} />
              <GiThreeLeaves className='text-6xl rotate-45 text-blue' />
              <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full h-auto  '>
                {products
                  .filter(
                    (product: productType) => product.category === category
                  )
                  .map((product: productType) => (
                    <div>
                      <Component key={product._id} product={product} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
