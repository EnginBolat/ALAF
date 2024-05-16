import { configureStore } from '@reduxjs/toolkit'
import { citiesSlice } from '../reducer'

export const store = configureStore({
    reducer: {
        cities: citiesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch