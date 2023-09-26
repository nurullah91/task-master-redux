import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Nurullah",
    email: "nurullahbhuiyan91@gmail.com",
    userTask: []
}


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
});

export default userSlice.reducer