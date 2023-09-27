import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Md Nurullah",
    email: "nurullahbhuiyan91@gmail.com",
}


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
});

export default userSlice.reducer