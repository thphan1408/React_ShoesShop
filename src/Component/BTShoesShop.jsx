import React from 'react'
import data from './data.json'
import { ProductsList } from './ProductsList'
import { ProductDetailModal } from './ProductDetailModal'

export const BTShoesShop = () => {
  return (
    <>
      <div className="container mt-3">
        <ProductsList data={data}></ProductsList>
        <ProductDetailModal />
      </div>
    </>
  )
}
