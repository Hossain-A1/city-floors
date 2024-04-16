"use client";
import ClothesContainer from "@/components/ui/ClothesContainer";
import ElectronicContainer from "@/components/ui/ElectronicContainer";
import Error from "@/components/ui/Error";
import FoodsContainer from "@/components/ui/FoodsContainer";
import Loading from "@/components/ui/Loading";
import OperatingContainer from "@/components/ui/OparatingContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import SportsContainer from "@/components/ui/SprotsContainer";
import useFetch from "@/hooks/useFetch";
import { productType } from "@/types/productsType";

const ShopPage = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");

  const categoryComponentMap = {
    Foods: FoodsContainer,
    Operating: OperatingContainer,
    Electronics: ElectronicContainer,
    Clothes: ClothesContainer,
    Sports: SportsContainer,
  };
  if (isLoading) return <Loading />;
  if (error) return <Error error={error.message} />;
  if (!products || products.length === 0) return <div>No products found.</div>;
  return (
    <div className='container sp'>
      {products && (
        <div>
          {Object.entries(categoryComponentMap).map(([category, Component]) => (
          
            <div key={category}>
              <SectionTitle
                title={`${category} Best Sellers`}
                subtitle="Don't wait any longer and discover other related products"
              />
              <div>
                {products
                  .filter(
                    (product: productType) => product.category === category
                  )
                  .map((product: productType) => (
                    <Component key={product._id} product={product} />
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
