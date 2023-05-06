import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        updateUserProfile: (state, action) => {
            state.user.user_metadata = action.payload
        },
        unSetUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, unSetUser, updateUserProfile } = userSlice.actions
export default userSlice.reducer