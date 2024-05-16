import { createSlice } from '@reduxjs/toolkit'
import { fetchCities } from '../actions';
import { City } from '../../model';

interface CitiesState {
    cities?: Array<City>
    error: string;
    loading: boolean;
}

const initialState: CitiesState = {
    cities: undefined,
    error: '',
    loading: true
}

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCities.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                return { ...state, loading: false, cities: action.payload }
            })
            .addCase(fetchCities.rejected, (state, action) => {
                return { ...state, loading: false, error: `${action.error.message}` }
            })
    }
})

export default citiesSlice.reducer