import { productType } from "@/types/productsType";

interface SprotsContainerProps {
  product: productType;
}

const SprotsContainer: React.FC<SprotsContainerProps> = ({ product }) => {
  return <div>SprotsContainer</div>;
};

export default SprotsContainer;
