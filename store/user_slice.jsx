import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (state) => {
  localStorage.setItem("user", JSON.stringify(...state));
};

const user_slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    taste: [],
  },
  reducers: {
    getUser(state, action){
        let data = localStorage.getItem('user')
        if (!data){
            data = {
                name: "",
                taste: [],
              }
              localStorage.setItem('user', data)
        }
        return JSON.parse(data)
    },
    createUser(state, action) {
      const { name, taste } = action.payload;
      state.name = name;
      state.taste = taste;
      updateLocalStorage(...state)
    },
    removeuser(state, action) {
        state.name = ''
        state.taste = ''
        updateLocalStorage(...state)
    }
  },
});

export const {getUser, createUser, removeuser} = user_slice.actions
export default user_slice.reducer