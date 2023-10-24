import React from 'react'
import { ProductsItem } from './ProductsItem'

export const ProductsList = (props) => {
  const { data, handleProductDetail, handleCarts } = props
  // console.log('data', data)
  return (
    <div className="mt-3">
      <div className="row">
        {data.map((item) => {
          return (
            <ProductsItem
              key={item.id}
              item={item}
              handleProductDetail={handleProductDetail}
              handleCarts={handleCarts}
            ></ProductsItem>
          )
        })}
      </div>
    </div>
  )
}
