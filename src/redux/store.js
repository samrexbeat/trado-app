import { configureStore } from '@reduxjs/toolkit'
import rootReducers from "./reducer/";
import allReducers from "./reducer";

const store =  configureStore({rootReducers, reducer: allReducers});

export default store;

