import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DemoLifeCycle extends Component {
  // constructor
  constructor(props) {
    super();
    this.state = {
      login: "",
      arrProduct: [],
      number: 1,
      thongTinNguoiDung: {
        hoTen: "Dat",
      },
    };
    console.log("constructor");
  }

  // componentDidMount 
  componentDidMount() {
    // phương thức này sẽ chạy sau khi phương thức render chạy xong 
    // Trong componentDidMount thường sẽ chạy phương thức gọi dữ liệu từ server 
    // để hiển thị lên giao diện
    console.log("componentDidMount");
    this.getAllProduct();
    // chạy setInterval
    this.capNhatTinTuc();
  }

  getAllProduct = async () => {
    //gọi dữ liệu từ server
    let res = await axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    console.log(res.data.content);
    this.setState({
      ...this.state,
      arrProduct: res.data.content,
    });
  };

  // phương thức tĩnh: nghĩa là có thể gọi đối tượng mà ko cần khởi tạo đối tượng con
  // nhiệm vự: 
  /** getDerivedStateFromProps giúp can thiệp vào state và props trước quá trình render lên giao diện
   * 
   * @param {*} newProps : props trước khi render
   * @param {*} currentState : là state ngay trước thời điểm render
   * @returns 
   */
  static getDerivedStateFromProps(newProps,currentState) {
    console.log("getDerivedStateFromProps");
    // nhiệm vụ: check nếu như dưới local store có dữ liệu userLogin thì sẽ hiển thị lên giao diện cho người dùng
    if (localStorage.getItem("userLogin")) {
        let userLogin = localStorage.getItem("userLogin");
        return (currentState = {
            ...currentState,
            login: userLogin,
        });
    }
  };

  // tôi có nên update lại k?
  // shouldComponentUpdate sẽ chạy khi updating nghĩa là khi có state hoặc props (nhận vào state) thay đổi,
  // shouldComponentUpdate sẽ nhận vào giá trị true hoặc false tuỳ thuộc vào việc chúng ta có muốn render lại giao diện hay không

  shouldComponentUpdate(newProps, newState) {
    // khi sử lý trả về 2 giá trị 
    // true: component được phép update lại
    // false: ngăn component update
    console.log("shouldComponentUpdate");
    return true
  };

  capNhatTinTuc = () => {
    this.demoInterval = setInterval(() => {
        console.log("cập nhật mới");
      },[3000]);
  } ;

  /** componentWillUnmount chạy sau khi component bị xoá bỏ, ở đây có nghĩa là component ko hiển thị lên cho người dùng
   * 
   */
  componentWillUnmount () {
    console.log("this.componentWillUnmount");
    // alert("Nay đi coi phim nha mấy má! Peekaboo! #coiphim #vsghe")

    // giúp xoá đi setInterval đang hoạt động
    // khi xoá truyền id của setInterval có thể đặt biến để gán setInterval và gọi tên biến dố trong hàm clear
    clearInterval(this.demoInterval);
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>DemoLifeCycle</h2>
        {/* hiển thị tên người dùng */}
        <p> Xin chào, {this.state.login}!</p>
        <Child number={this.state.number} thongTin={this.state.thongTinNguoiDung}/>
        <button onClick={() => {
            // shallow compare
            // ở đây khi gọi tới state để thay đổi dữ liệu nhưng state của chúng ta là một Object
            // nếu không clone ra trước sẽ gặp 1 vấn đề liên quan về tham chiếu, lúc nào PureComponent
            // sẽ không xác định được props đó đã thay đổi hay chưa nên sẽ bị lỗi cập nhật
            // như ví dụ dưới đây
            // let newThongTin = this.state.thongTinNguoiDung;
            // đây là một object mới
            let newThongTin = {...this.state.thongTinNguoiDung};
            newThongTin.hoTen = "Chi";
            this.setState({
                thongTinNguoiDung: newThongTin,
            });
        }} className="btn btn-warning mb-3 me-2">Đổi tên</button>
        <button onClick={() => {
            this.setState ({
                ...this.state,
                number: this.state.number + 1,
            })
        }} className='btn btn-dark mb-3'> Nhấn em đi anh UwU</button>
        <div className="container">
          <div className="d-flex justify-content-center ">
            <button onClick={this.getAllProduct} className="btn btn-dark mb-4" style={{display: "block"}}>
                Lấy sản phẩm
            </button>
          </div>
          <div className="row mb-3 g-3">
            {this.state.arrProduct.map((item, index) => {
                // console.log(item);
                // bóc tách phần tử
                const {image, name, price, id} = item
              return (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img src={image} alt="" />
                    <div className="card-body">
                      <h3 className="text-center">{name}</h3>
                      <p className="text-center">Giá: {price}</p>
                      <NavLink to={`/lifecycle/${id}`} className="btn btn-info">Get Detail</NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
