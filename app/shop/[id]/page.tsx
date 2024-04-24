"use client";
import ProductDetails from "@/components/ProductDetails";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import useFetch from "@/hooks/useFetch";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useFetch(`/api/products/${params.id}`);
  return (
    <div className='container sp'>
      <div className='flex items-center justify-center'>
        {isLoading && <Loading />}
        {error && (
          <div>
            <Error error={error.message} />
            <h2>Check your internet connection or refesh!</h2>
          </div>
        )}
      </div>
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductDetailsPage;
