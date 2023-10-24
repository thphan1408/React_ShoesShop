export const ProductDetailModal = (props) => {
  const { productDetail } = props
  // console.log(productDetail)
  return (
    <div
      className="modal fade"
      id="ProductDetailModal"
      tabIndex={-1}
      aria-labelledby="ProductDetailModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ProductDetailModal">
              Product Detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <img
                  src={productDetail.image}
                  alt={productDetail.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-6">
                <h2>{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <p className="fw-bold">${productDetail.price}</p>
                <p className="fw-bold">Quantity: {productDetail.quantity}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-success">
                    Add to cart
                  </button>
                  <button className="btn btn-outline-danger">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
