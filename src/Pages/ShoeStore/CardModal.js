import React, { Component } from "react";
import { connect } from "react-redux";

class CardModal extends Component {
  render() {
    console.log(this.props.cart)
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Giỏ hàng của bạn
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Image</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số Lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img width={100} src={item.image} alt=""/>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.soLuong}</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success">Thanh Toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        cart: state.product.arrCart,
    };
};

export default connect(mapStateToProps)(CardModal);