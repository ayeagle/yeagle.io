import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";

// why in the world did removing the brackets fix this?
// https://kodlogs.net/354/uncaught-error-expected-the-reducer-to-be-a-function

const store = createStore(cartReducer);

export default store;
