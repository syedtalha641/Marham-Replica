import { createSlice } from '@reduxjs/toolkit'
import { JWT_LOCAL_STORAGE } from '../utils/contant'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: ''
    },
    reducers: {
        setUser: (state, action) => {
            if(!action.payload) {
                state.user = null
            } else {
                state.user = action.payload
            }
        },
        setToken: (state, action) => {
            if(action.payload) {
                localStorage.setItem(JWT_LOCAL_STORAGE, action.payload)
            } else {
                localStorage.removeItem(JWT_LOCAL_STORAGE)
            }
            state.token = action.payload
        },
    }
})

export const { setUser, setToken } = userSlice.actions
export default userSlice.reducer