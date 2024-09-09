import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:9000/products");
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default productsSlice.reducer;
