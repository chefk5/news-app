import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Icredentials, Iprofile } from 'app/interfaces'

export interface IinitialState {
  name: string
  email: string
  token: string
  isLoggedIn: boolean
  news: []
}

const initialState: IinitialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
  news: []
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveCredentials: (state, action: PayloadAction<Icredentials>) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      console.log(state)
    },
    saveProfileValues: (state, action: PayloadAction<Iprofile>) => {
      console.log(action.payload)
      state.name = action.payload.name
      state.email = action.payload.email
      state.token = action.payload.token
    }
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { saveCredentials, logout, saveProfileValues } = newsSlice.actions

export default newsSlice.reducer
