import { configureStore } from "@reduxjs/toolkit";
import gheChon from "./reducer/Ghechon";


const store = configureStore({
    reducer: {
        list: gheChon,
    },
})

export default store