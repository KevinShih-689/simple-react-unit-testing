/**
 * 
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Use createSlice will produce
    * action creators
    * action type 
 */
const authRducer = createSlice({
    /* Slice Name */
    name: 'authRducer',
    /* Initial state */
    initialState: {
        isLogin: false,
        correctUserName: ''
    },
    /* Reducers */
    reducers: {
        /* Write the function you wanna use to update state */
        success: (state) => {
            state.isLogin = true
        },
        fail: (state) => {
            state.isLogin = false
        },
        setUserName: (state, action) => {
            state.correctUserName = action.payload
        }
    }
})

export default authRducer