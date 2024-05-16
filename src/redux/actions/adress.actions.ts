import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { Adress } from "../../model";

export const adressList = createAsyncThunk(
    'adress/list',
    async () => {
        try {
            const { data, status } = await axios.get(`https://6645cd02b8925626f8933d3a.mockapi.io/adressList`)
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
            const { data, status } = await axios.post(`https://6645cd02b8925626f8933d3a.mockapi.io/adressList`, {

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