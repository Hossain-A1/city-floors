import ClothesContainer from "@/components/ui/ClothesContainer";
import ElectronicContainer from "@/components/ui/ElectronicContainer";
import FoodsContainer from "@/components/ui/FoodsContainer";
import OparatingContainer from "@/components/ui/OparatingContainer";
import SprotsContainer from "@/components/ui/SprotsContainer";

const ShopePage = () => {
  return (
    <div className='container sp flex flex-col items-center  gap-10'>
      <div>
        <FoodsContainer />
      </div>
      <div>
        <OparatingContainer />
      </div>
      <div>
        <ElectronicContainer />
      </div>
      <div>
        <SprotsContainer />
      </div>
      <div>
        <ClothesContainer />
      </div>
    </div>
  );
};

export default ShopePage;
