import { configureStore } from "@reduxjs/toolkit";
import { carReducer,addCar,removeCar,changeSearchTerm } from "./slices/carSlice";

import {formReducer,changeName,changeCost} from "./slices/formSlice";


const store = configureStore({
    reducer:{
        cars:carReducer,
        form:formReducer
    }
});


export {addCar,removeCar,changeSearchTerm,changeCost,changeName,store } ;