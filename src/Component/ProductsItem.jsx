import React from 'react'

export const ProductsItem = (props) => {
  const { item, handleCarts } = props
  return (
    <div className="col-md-3 mt-3">
      <div className="card">
        <img
          src={item.image}
          className="card-img-top img-fluid"
          alt={item.name}
        />
        <div className="card-body">
          <p className="card-title fw-bold">{item.name}</p>
          <p className="card-text">{item.shortDescription}</p>
          <p className="card-text fw-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(item.price)}
          </p>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => handleCarts(item)}
            >
              Add to cart
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#ProductDetailModal"
              onClick={() => {
                handleProductDetail(products)
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
