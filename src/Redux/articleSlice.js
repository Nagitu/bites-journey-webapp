import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    title: '',
    content: '',
    image: null,
    categories: [],
    selectedCategories: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
   setImage : (state, action) => {
  state.image = action.payload;
  },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    toggleCategory: (state, action) => {
      const categoryId = action.payload;
      if (state.selectedCategories.includes(categoryId)) {
        state.selectedCategories = state.selectedCategories.filter((id) => id !== categoryId);
      } else {
        state.selectedCategories.push(categoryId);
      }
    },
  },
});

export const {
  setTitle,
  setContent,
  setImage,
  setCategories,
  toggleCategory,
} = articleSlice.actions;

export default articleSlice.reducer;
