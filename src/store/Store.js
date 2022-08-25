import { configureStore , combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import {contactReducer} from './Reducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import logger from 'redux-logger'


const persistConfig = {
    key: "contacts",
    storage,

}
const rootReducer =combineReducers({
    reducer: contactReducer
})

const middleware = [...getDefaultMiddleware () , logger];

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware,
})

const persistor = persistStore(store)
console.log(store);

export default {store,persistor}