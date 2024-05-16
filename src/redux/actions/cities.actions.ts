import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { API_URL } from '.env';

export const fetchCities = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        try {
            const { data, status } = await axios.get(`${API_URL}/cities`)
            if (status === HttpStatusCode.Ok) {
                console.log(data);
                return data;
            }
            throw new Error(`We can't reach our servers please try again later.`)
        } catch (error) {
            console.log(error);
            throw new Error(`We can't reach our servers please try again later.`)
        }
    }
)