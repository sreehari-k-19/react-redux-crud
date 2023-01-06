
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../url";

const initialState = {
  details: [],
  getDetailsStatus: "",
  getDetailsError: "",
  deleteUserStatus: "",
  deleteUserError: "",
  updateUserStatus: "",
  updateUserError: "",
};

export const getDetails = createAsyncThunk("details/getDetails", async () => {
  const response = await axios.get(`${BaseUrl}/admin`)
  console.log("ressss")
  // console.log(response.data)

  return response.data
})

export const deleteUser = createAsyncThunk(
  "details/deleteuser",
  async (_id, { rejectWithValue }) => {
    const response = await axios.delete(`${BaseUrl}/admin/${_id}`);
    return response.data;
  }
);
export const updateUser = createAsyncThunk(
  "details/updateuser",
  async (_id, { rejectWithValue }) => {
    const response = await axios.put(`${BaseUrl}/admin/${_id}`);
    return response.data;
  }
);


const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetails.pending]: (state, action) => {
      return {
        ...state,
        getDetailsStatus: "pending",
        getDetailsError: "",
        deleteUserStatus: "",
        deleteUserError: "",
        updateUserStatus: "",
        updateUserError: "",
      };
    },
    [getDetails.fulfilled]: (state, action) => {
      
      return {
        ...state,
        details: action.payload,
        getDetailsStatus: "success",
        getDetailsError: "",
        deleteUserStatus: "",
        deleteUserError: "",
        updateUserStatus: "",
        updateUserError: "",
      };
    },


    [getDetails.rejected]: (state, action) => {
      return {
        ...state,
        getDetailsStatus: "rejected",
        getDetailsError: action.payload,
        deleteUserStatus: "",
        deleteUserError: "",
        updateUserStatus: "",
        updateUserError: "",
      };
    },
    [deleteUser.pending]: (state, action) => {
      return {
        ...state,
        getDetailsStatus: "",
        getDetailsError: "",
        deleteUserStatus: "pending",
        deleteUserError: "",
        updateUserStatus: "",
        updateUserError: "",
      };
    },
    [deleteUser.fulfilled]: (state, action) => {
      const currentDetails = state.details.filter(
        (detail) => detail._id !== action.payload._id
      );

      return {
        ...state,
        details: currentDetails,
        getDetailsStatus: "",
        getDetailsError: "",
        deleteUserStatus: true,
        deleteUserError: "",
        updateUserStatus: "",
        updateUserError: "",
      };
    },
    [deleteUser.rejected]: (state, action) => {
      return {
        ...state,
        getDetailsStatus: "",
        getDetailsError: "",
        deleteUserStatus: "rejected",
        deleteUserError: action.payload,
        updateUserStatus: "",
        updateUserError: "",
      };
    },
  }
})

export default adminSlice.reducer;