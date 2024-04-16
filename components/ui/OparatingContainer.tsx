import { productType } from '@/types/productsType'
import React from 'react'
interface OparatingContainerProps{
product:productType
}
const OparatingContainer :React.FC<OparatingContainerProps>= ({product}) => {
  return (
    <div>OparatingContainer</div>
  )
}

export default OparatingContainer