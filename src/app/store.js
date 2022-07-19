import { configureStore } from "@reduxjs/toolkit";
/**
 * The reducers return from component's reducer
 * So, if you have multiple reducer, you need to import them specifictly. Like below.
 */
import authRducer from "../redux/reducers/admin/auth-reducer";

export default configureStore({
    reducer: {
        auth: authRducer.reducer
    }
})