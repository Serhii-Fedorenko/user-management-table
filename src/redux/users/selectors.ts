import { RootState } from "../store";

export const selectUsers = (state: RootState) => state.users.items;

export const selectFilter = (state: RootState) => state.users.filters;
