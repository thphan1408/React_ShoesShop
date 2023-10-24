import React from 'react'

export const CartModal = (props) => {
  const { carts, handleCartQuantity, handleDeleteCart } = props

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      aria-labelledby="cartModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="cartModal">
              Product Cart
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* Nếu carts rỗng */}
            {!carts.length && (
              <div className="alert alert-danger text-center">
                Không có sản phẩm nào trong giỏ hàng
              </div>
            )}

            {/* Cart có sản phẩm */}
            {!!carts.length && (
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {carts.map((products, index) => {
                    return (
                      <tr key={products.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={products.image}
                            alt="..."
                            className="img-fluid"
                            style={{ width: 80, height: 80 }}
                          />
                        </td>
                        <td>{products.name}</td>
                        <td style={{ maxWidth: 300 }}>
                          <p>{products.shortDescription}</p>
                        </td>
                        <td>${products.price}</td>
                        <td>
                          <button
                            className="btn btn-outline-success"
                            onClick={() => handleCartQuantity(products.id, 1)}
                          >
                            +
                          </button>
                          <span className="mx-2">{products.cartQuantity}</span>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleCartQuantity(products.id, -1)}
                          >
                            -
                          </button>
                        </td>
                        <td>
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          }).format(products.price * products.cartQuantity)}
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => handleDeleteCart(products.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
