import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getrestaurant = createAsyncThunk ("restaurant/get",async()=> {try {
    let result = axios.get("http://localhost:5000/restaurant/allrestaurant")
    return result;
} catch (error) {
    console.log(error);
}})
export const addrestaurant = createAsyncThunk ("restaurant/add",async(restaurant)=> {try {
    let result = axios.post("http://localhost:5000/restaurant/addrestaurant",restaurant)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleterestaurant= createAsyncThunk ("restaurant/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/restaurant/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editrestaurant = createAsyncThunk ("restaurant/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/restaurant/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    restaurantlist:null,
    status:null,
}

export const restaurantSlice = createSlice({

  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers:{
    [getrestaurant.pending]:(state) => {
        state.status="pending";
    },
    [getrestaurant.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.restaurantlist =action.payload.data.restaurant;
    },
    [getrestaurant.rejected]:(state) => {
        state.status="rejected";
    },

    [addrestaurant.pending]:(state) => {
        state.status="pending";
    },
    [addrestaurant.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addrestaurant.rejected]:(state) => {
        state.status="rejected";
    },

    [deleterestaurant.pending]:(state) => {
        state.status="pending";
    },
    [deleterestaurant.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleterestaurant.rejected]:(state) => {
        state.status="rejected";
    },

    [editrestaurant.pending]:(state) => {
        state.status="pending";
    },
    [editrestaurant.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editrestaurant.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =restaurantSlice.actions

export default restaurantSlice.reducer