import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;
const RENDER_URL = process.env.REACT_APP_RENDER_URL;

export const fetchFullUser = createAsyncThunk(
    'user/fetchFullUser',
    async (userId, {rejectWithValue})=>
    {
        try {
            const res = await fetch(`${RENDER_URL}/artist-page/${userId}`)
            const data = await res.json()
            if(!res.ok) return rejectWithValue(data);
            return data;
        } catch (err) {
            return rejectWithValue({error: err.message})
        }
    }
)