import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h2>Thay đổi tên</h2>
        <p>{this.props.hoTen}</p>
        <button onClick={() => {
            const action = {
                type: "DOITEN",
                payload: "Hoàng Đức",
                // type: "DOILAI",
                // payload: "Tiến Đạt"
            };
            // bắn dữ liệu về kho chứa redux
            this.props.dispatch(action);
        }} className="btn btn-dark mb-3 me-2"> Nút đổi tên đi </button>
        <button onClick={() => {
            const action = {
                type: "DOILAI",
                payload: "Tiến Đạt"
            };
            // bắn dữ liệu về kho chứa redux
            this.props.dispatch(action);
        }} className="btn btn-dark mb-3"> Nút đổi tên lại</button>
      </div>
    )
  }
}

// closure function 
// const hienThi = () => {
//     return () => {

//     }
// }
// hienThi()()

// bước gọi state tới từ redux về 
const mapStateToProps = (state) => {
    // giúp lấy dữ liệu từ redux về 
    // state đóng vai trò là tham số đại diện cho reducer giúp lấy dữ liệu từ store của redux
    return {
        hoTen: state.hoTen,
        tuoi: state.tuoi,
    }
}


// setup connect component với redux
// gọi phương thức connect tới từ react-redux để kết nối 
// khi gọi component này để sử dụng sẽ gọi tên class chứ ko gọi ReduxComponent
const ReduxComponent = connect(mapStateToProps)(DemoRedux);
// thì Redux Component sẽ trả về component có tên là DemoRedux nhưng có gắn thêm các phương thức tới từ redux
export default ReduxComponent;