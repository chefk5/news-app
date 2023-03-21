import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { newsApi } from '../services/news'
import newsReducer from './newsSlice'
const persistConfig = {
  key: 'newsReducer',
  storage
}

//store for both reducers plus redux-persist configuration
const persistedReducer = persistReducer(persistConfig, newsReducer)

export const store = configureStore({
  reducer: {
    newsReducer: persistedReducer,
    [newsApi.reducerPath]: newsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(newsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
