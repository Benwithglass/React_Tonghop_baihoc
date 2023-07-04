import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShoeDetail extends Component {
  render() {
    // console.log(this.props.product);
    const url = window.location.href.split('/');
    const id = url[url.length - 1];
    const item = this.props.product.find((item) => item.id == id);
    // console.log(item);
    return (
      <div className="container d-flex justify-content-center align-items-center bg-warning bg-opacity-15">
    
        <div className="">
            <img src={item.image} className="me-5" alt=""/>
        </div>
        <div className="p-2 rounded-2 w-50 bg-success bg-opacity-50">
            <h3 className="fs-1">{item.name} </h3>
            <br />
            <br />

            <p className="fs-3">${item.price}</p>
            <br />

            <p className="fs-5">{item.description}</p>
            <button
             onClick={()=> {
                // xử lý đưa dữ liệu từ component lên redux store
                this.props.addToCart(item);
             }}
             className='btn btn-success mb-2 w-100' >Thêm vào giỏ hàng</button>
        </div>
      </div>
    )
  }
}


// connect 
const mapStateToProps = (state) => {
    return {
        product: state.product.arrProduct,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            const action = {
                type: "ADDTOCART",
                payload: item,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
