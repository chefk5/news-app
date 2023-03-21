import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './newsSlice'
import storage from 'redux-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsApi } from '../services/news'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
const persistConfig = {
  key: 'newsReducer',
  storage
  //whitelist: ['newsReducer'] // list of reducers to persist
}

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

// setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
