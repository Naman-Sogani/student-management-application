import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [
      {
        id: 1,
        fullName: "xx",
        age: 20,
        gender: "male",
        dob: "20-10-2002",
        address: "some address",
        courseId: "course1",
        batchId: "batch1"
      },

      {
        id: 2,
        fullName: "yy",
        age: 22,
        gender: "female",
        dob: "20-10-2000",
        address: "some address",
        courseId: "course2",
        batchId: "batch2"
      },

      {
        id: 3,
        fullName: "zz",
        age: 30,
        gender: "male",
        dob: "20-10-1992",
        address: "some address",
        courseId: "course3",
        batchId: "batch3"
      }
    ]
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload.id);
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
