import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { BaseUrl } from "../url";

const initialState = {
    token: localStorage.getItem("admintoken"),
    email: "",
    loginStatus: "",
    loginError: "",
    adminLoaded: false,
};

export const loginadmin = createAsyncThunk("auth/loginadmin", async (values, { rejectWithValue }) => {
    try {
        const token = await axios.post(`${BaseUrl}/admin/login`, {
            email: values.email,
            password: values.password,
        });
        localStorage.setItem("admintoken", token.data);
        return token.data;

    } catch (err) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
    }
})

const adminauthSlice = createSlice({
    name: "adminauth",
    initialState,
    reducers: {
        loadadmin(state, action) {
            const token = state.token;
            if (token) {
                const admin = jwtDecode(token);
                return {
                    ...state,
                    token,
                    email: admin.email,
                    adminLoaded: true

                }

            }

        },
        logoutAdmin(state, action) {
            localStorage.removeItem("admintoken")

            return {
                ...state,
                token: "",
                email: "",
                loginStatus: "",
                loginError: "",
                adminLoaded: false,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginadmin.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(loginadmin.fulfilled, (state, action) => {
            if (action.payload) {
                const admin = jwtDecode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    email: admin.email,
                    loginStatus: "success",
                };
            } else return state;
        });
        builder.addCase(loginadmin.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    }
})
export const {loadadmin,logoutAdmin}=adminauthSlice.actions

export default adminauthSlice.reducer