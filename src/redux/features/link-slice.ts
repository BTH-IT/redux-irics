import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILink } from "@/types/link";
import moment from "moment";

const initialState: ILink[] = [];

export const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<ILink>) => {
      const newLinks = [
        ...state,
        action.payload,
      ];

      // Sort the new links by createdAt
      return newLinks.sort((a, b) => moment(a.createdAt).valueOf() < moment(b.createdAt).valueOf() ? 1 : -1);
    },
    updateLink: (state, action: PayloadAction<ILink>) => {
      const linkIdx = state.findIndex((link) => link.id === action.payload.id)

      state[linkIdx] = action.payload;
    },
    deleteLink: (state, action: PayloadAction<string>) => {
      const linkIdx = state.findIndex((link) => link.id === action.payload)

      state.splice(linkIdx, 1);
    }
  }
})

export const { addLink, updateLink, deleteLink } = linkSlice.actions;

export default linkSlice.reducer;
