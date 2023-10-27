// articleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArticles,getArticleByID,deleteArticleById, createArticle } from '../../utils/Articles'; // Pastikan Anda memiliki file api yang berisi fungsi-fungsi ini

const initialState = {
  articles: [],
  selectedArticle: null,
  status: 'idle',
  error: null,
};

// Membuat asynchronous thunk untuk mengambil daftar artikel
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const articles = await getArticles();
  return articles;
});

// Membuat asynchronous thunk untuk mengambil artikel berdasarkan ID
export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (id) => {
  const article = await getArticleByID(id);
  return article;
});

// Membuat asynchronous thunk untuk menghapus artikel berdasarkan ID
export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id) => {
  await deleteArticleById(id);
  return id;
});

// Membuat asynchronous thunk untuk membuat artikel baru
export const createNewArticle = createAsyncThunk('articles/createNewArticle', async (formData) => {
  const newArticle = await createArticle(formData);
  return newArticle;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearSelectedArticle: (state) => {
      state.selectedArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.selectedArticle = action.payload;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter((article) => article.id !== action.payload);
      })
      .addCase(createNewArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      });
  },
});

export const { clearSelectedArticle } = articleSlice.actions;
export default articleSlice.reducer;
