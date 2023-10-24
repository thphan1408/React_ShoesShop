import React from 'react'
import data from './data.json'
import { ProductsList } from './ProductsList'
import { ProductDetailModal } from './ProductDetailModal'
import { useState } from 'react'
import { CartModal } from './CartModal'

export const BTShoesShop = () => {
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 995,
    image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
  })

  const [carts, setCarts] = useState([])

  const handleProductDetail = (products) => {
    setProductDetail(products)
  }

  const handleCarts = (products) => {
    // setCarts([...carts, {...products, cartQuantity: 1}]);
    setCarts((prevState) => {
      // Kiểm tra xem trong cart đã có sản phẩm đang muốn thêm hay chưa
      const index = prevState.findIndex((item) => item.id === products.id)
      //Chưa tồn tại trong cart
      if (index === -1) {
        prevState.push({ ...products, cartQuantity: 1 })
      } else {
        // Đã tồn tại trong carts
        prevState[index].cartQuantity += 1
      }

      return [...prevState]
    })
  }

  // quantity: 1 || -1
  // 1: btn +
  // -1: btn -
  const handCartQuantity = (productID, quantity) => {
    // console.log(productID, quantity);
    setCarts((prevState) => {
      const index = prevState.findIndex((value) => value.id === productID)
      prevState[index].cartQuantity =
        prevState[index].cartQuantity + quantity || 1
      return [...prevState]
    })
  }

  const handleDeleteCart = (productID) => {
    setCarts((prevState) => {
      return prevState.filter((value) => value.id !== productID)
    })
  }

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Bài tập shoes shop</h1>
          <button
            className="btn btn-outline-dark fs-5 fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
          >
            Cart Shopping
          </button>
        </div>
        <ProductsList
          data={data}
          handleProductDetail={handleProductDetail}
          handleCarts={handleCarts}
        ></ProductsList>
      </div>
      <ProductDetailModal productDetail={productDetail} />
      <CartModal
        carts={carts}
        handleCartQuantity={handCartQuantity}
        handleDeleteCart={handleDeleteCart}
      ></CartModal>
    </>
  )
}
