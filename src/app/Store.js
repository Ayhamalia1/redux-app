import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feature/counter/counterSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { ProductsApi } from '../service/reduxApi'
import { setupListeners } from '@reduxjs/toolkit/query'

 


const persistCounterConfig = {
  key: 'counter-persist',
  storage,
}
const persistedCounterReducer = persistReducer(persistCounterConfig,counterSlice)

export const store = configureStore({
  reducer: {
    counter:persistedCounterReducer,

    //api
    ProductsApi: ProductsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(ProductsApi.middleware),})
export const persistor = persistStore(store)
setupListeners(store.dispatch)


