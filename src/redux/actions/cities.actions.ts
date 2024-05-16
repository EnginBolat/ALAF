import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { API_URL } from '.env';

export const fetchCities = createAsyncThunk(
    'cities/fetchCities',
    async () => {
        try {
            const { data, status } = await axios.get(`https://6645cd02b8925626f8933d3a.mockapi.io/cities`)
            if (status === HttpStatusCode.Ok) {
                return data;
            }
            throw new Error(`We can't reach our servers please try again later.`)
        } catch (error) {
            console.log(error);
            throw new Error(`We can't reach our servers please try again later.`)
        }
    }
)