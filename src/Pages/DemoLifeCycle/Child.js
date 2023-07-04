import React, { Component, PureComponent } from 'react'
import axios from "axios";

export default class Child extends PureComponent {

  // PureComponent được lấy ra từ react
  // PureComponent tự động xác định các props được truyền xuống component 
  // có thay đổi hay không để quyết định việc render lại giao diện 
  // nếu có thay đổi sẽ cho component render lại và ngược lại là ko render nếu props ko thay đổi
  // PureComponent có thể sử dụng cho các giao diện tĩnh, không nhận các props 

  // constructor
  constructor(props) {
    super();
    this.state = {
        numberChild: 1,
        product: {},
        id: "",
    }
    console.log("constructor child");
  };

  // componentDidMount
  componentDidMount() {
    console.log("componentDidMount child");
  };

//   shouldComponentUpdate(newProps, newState) {
//     console.log ('props', this.props);
//     console.log('newProps', newProps);
    // Mình sẽ check nếu như người dùng bấm vào nút Lấy sản phẩm để lấy dữ liệu cho 
    // arrProduct thì sẽ không render lại vì arrProduct không phảo là props được truyền vào nên 
    // sẽ không liên quan gì tới component child

//     if (this.props.number == newProps.number) {
//         return false;
//     } else {
//         return true;
//     }
//   }

static getDeriveStateFromProps(newProps,currentState) {
    let url = window.location.href.split('/');
    const id = url[url.length - 1]; 
    return {
        ...currentState,
        id,
    };
}

//componentDidUpdate sẽ chạy sau cùng 
// ứng dụng: giúp check các dữ liệu từ state và props có thay đổi hay không 
// để xử lí tiếp các hành động tiếp theo

componentDidUpdate (prevProps,prevState) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);
    //
    if (prevState.id !== this.state.id) {
        console.log("số đã đổi");
        //gọi dữ liệu giày ứng với số thay đổi 
        this.getProductById(this.state.numberChild);
    }
}

getProductById = async (id) => {
    let res = await axios ({
        method: "GET",
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
    console.log(res);
    this.setState({
        ...this.state,
        product: res.data.content,
    });
};

  render() {
    console.log("render child")
    const {name, price, image} = this.state.product;
    return (
      <div>
        <h2>Demo shouldComponentUpdate</h2>
        <p>{this.props.number}</p>
        <p>{this.props.thongTin.hoTen}</p>
        <div className="container">
            <h3>Demo về componentDidUpdate</h3>
            <p>{this.state.numberChild}</p>
            <button onClick={() => {
                this.setState({
                    numberChild: this.state.numberChild + 1,
                })
            }} className='btn btn-success'>Tăng 1 điểm</button>
            <div className="row">
                <div className="col-4">
                    <img src={image} alt />
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
