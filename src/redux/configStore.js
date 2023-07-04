import {configureStore} from '@reduxjs/toolkit'
import { productReducer } from './reducer/productReducer';


export const store = configureStore ({
    //reducer 
    // kho chứa
    // thêm thông tin đặc điểm ở đây
    reducer: {
        hoTen: (state="Tiến Đạt", action) => {
            // arrow function nhận vào 2 tham số, state và action
            // khi bắn dispatch từ component lên redux cần phải có check xem nên lắng nghe dispatch nào bằng cách check type
            // nhận thông tin bắn lên từ tham số action từ DemoRedux.js
            if (action.type == "DOITEN") {
                state = action.payload;
            } else if (action.type == "DOILAI") {
                state = action.payload;
            }
            return state;
        },

        product: productReducer,

    }
})