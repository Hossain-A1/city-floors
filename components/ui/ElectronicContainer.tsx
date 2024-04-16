import { productType } from "@/types/productsType"

interface ElectronicContainerProps{
  product:productType
  }

const ElectronicContainer:React.FC<ElectronicContainerProps> = ({product}) => {
  return (
    <div>ElectronicContainer</div>
  )
}

export default ElectronicContainer