import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";
import { Adress } from "../../model";
import { API_URL } from "@env"

export const adressList = createAsyncThunk(
    'adress/list',
    async () => {
        try {
            const { data, status } = await axios.get(`${API_URL}/adressList`) as { data: Array<Adress>, status: HttpStatusCode }
            if (status === HttpStatusCode.Ok) {
                return data.filter((address) => address.isDeleted === false);
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
                if (__DEV__) console.log(`Created New Record`);
                return data;
            }
            throw new Error(`We can't reach our servers please try again later.`)
        } catch (error) {
            console.log(error);
            throw new Error(`We can't reach our servers please try again later.`)
        }
    }
)


/**
 * 
 * Performs a soft delete of an address by setting its `isDeleted` property to `true`.
 * Triggers the `addressList` thunk to reload the address list after a successful update  
 * 
 */
export const deleteAdress = createAsyncThunk(
    'adress/delete',
    async ({ id, isDeleted }: { id: string, isDeleted: boolean }, thunkAPI) => {
        try {
            const { status } = await axios.patch(`${API_URL}/adressList/${id}`, {
                isDeleted: isDeleted
            });
            if (status === 200) {
                if (__DEV__) console.log(`Deleted Record Id:${id}`);
                thunkAPI.dispatch(adressList());
                return { id, isDeleted };
            }
            throw new Error(`We can't reach our servers please try again later.`);
        } catch (error) {
            console.log(error);
            throw new Error(`We can't reach our servers please try again later.`);
        }
    }
);