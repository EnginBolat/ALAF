import { configureStore } from '@reduxjs/toolkit'
import { citiesReducer, adressReducer } from '../reducer'

export const store = configureStore({
    reducer: {
        cities: citiesReducer,
        adress: adressReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;