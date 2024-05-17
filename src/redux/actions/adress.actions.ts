import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { Adress } from "../../model";
import { API_URL } from "@env"

export const adressList = createAsyncThunk(
    'adress/list',
    async () => {
        try {
            const { data, status } = await axios.get(`${API_URL}/adressList`)
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

export const addAdress = createAsyncThunk(
    'adress/add',
    async ({ formValue }: { formValue: Adress }) => {
        try {
            const { data, status } = await axios.post(`${API_URL}/adressList`, {

                adressTitle: formValue.adressTitle,
                city: formValue.city,
                adressDescription: formValue.adressDescription,
                currentAdress: formValue.currentAdress,

            })
            if (status === HttpStatusCode.Created) {
                return data;
            }
            throw new Error(`We can't reach our servers please try again later.`)
        } catch (error) {
            console.log(error);
            throw new Error(`We can't reach our servers please try again later.`)
        }
    }
)