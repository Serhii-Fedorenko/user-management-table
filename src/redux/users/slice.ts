import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: object;
  phone: string;
  website: string;
  company: object;
}

interface Filters {
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserState {
  items: User[];
  filters: Filters;
}

const initialState: UserState = {
  items: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{field: keyof Filters; value: string}>) => {
      const {field, value} = action.payload
      state.filters[field] = value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.items = action.payload;
      }
    );
  },
});

export const { setFilter } = userSlice.actions;

export const usersReducer = userSlice.reducer;
