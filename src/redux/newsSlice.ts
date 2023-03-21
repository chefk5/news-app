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
  name: 'newsSlice',
  initialState,
  reducers: {
    saveCredentials: (state, action: PayloadAction<Icredentials>) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.email = ''
      state.token = ''
      state.name = ''
    },
    saveProfileValues: (state, action: PayloadAction<Iprofile>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.token = action.payload.token
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveCredentials, logout, saveProfileValues } = newsSlice.actions

export default newsSlice.reducer
