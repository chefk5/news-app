import { ChakraProvider } from '@chakra-ui/react'
import App from 'App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistReducer, persistStore } from 'redux-persist'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const persistor = persistStore(store)

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ChakraProvider>
)
