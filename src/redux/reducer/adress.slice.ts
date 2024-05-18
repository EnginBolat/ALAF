import { createSlice } from '@reduxjs/toolkit'
import { addAdress, adressList, deleteAdress, fetchCities } from '../actions';
import { Adress } from '../../model';

interface AdressState {
    addresses?: Array<Adress>
    error: string;
    loading: boolean;
}

const initialState: AdressState = {
    addresses: undefined,
    error: '',
    loading: true,
}

export const adressSlice = createSlice({
    name: 'adress',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(adressList.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(adressList.fulfilled, (state, action) => {
                return { ...state, loading: false, addresses: action.payload }
            })
            .addCase(adressList.rejected, (state, action) => {
                return { ...state, loading: false, error: `${action.error.message}` }
            })
            .addCase(addAdress.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(addAdress.fulfilled, (state, action) => {
                return { ...state, loading: false }
            })
            .addCase(addAdress.rejected, (state, action) => {
                return { ...state, loading: false, error: `${action.error.message}` }
            })
            .addCase(deleteAdress.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(deleteAdress.fulfilled, (state, action) => {
                return { ...state, loading: false }
            })
            .addCase(deleteAdress.rejected, (state, action) => {
                return { ...state, loading: false, error: `${action.error.message}` }
            })
    }
})

export default adressSlice.reducer