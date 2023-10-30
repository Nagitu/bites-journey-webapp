import React, { useState,useEffect } from 'react'
import InputForm from './InputForm'
import SubmitButton from './SubmitButton';
import CategoriesCheck from './CategoriesCheck';
import UploadButton from './UploadButton';
import { createArticle } from '../../../utils/Articles';
import { useDispatch ,useSelector} from 'react-redux';
import { setTitle,setContent,setCategories,setImage,toggleCategory } from '@/Redux/articleSlice';


const FormComponent = () => {
const dispatch = useDispatch();
const title = useSelector((state) => state.article.title);
const content = useSelector((state) => state.article.content);
const image = useSelector((state) => state.article.image);
const categories = useSelector((state) => state.article.categories);
const selectedCategories = useSelector((state) => state.article.selectedCategories);



const handleTitleChange = (e) => {
  dispatch(setTitle(e.target.value));
};

const handleContentChange = (e) => {
  dispatch(setContent(e.target.value));
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Gunakan URL gambar
    dispatch(setImage(imageUrl));
  };

const handleCategoryChange = (categoryId) => {
  dispatch(toggleCategory(categoryId));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  const selectedCategoryIds = selectedCategories.map((category) => category.id);
  formData.append('id_categories', selectedCategoryIds);
  formData.append('image', image);

  console.log('ini tombol untuk kirim data');
  console.log({ title, content, selectedCategories, image });
//   createArticle(formData);
};
useEffect(() => {
    const headers = new Headers({ 'x-api-key': 'binar-36' });
    fetch(`http://localhost:9000/api/v1/category`, { headers })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCategories(data.data));
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

    return (
        <div className='w-full h-full bg-blur-lg bg-white bg-opacity-40 backdrop-blur-md backdrop-filter border-black border-2 rounded-xl flex flex-col gap-5 items-center'>
            <div className="h-screen w-full flex flex-col justify-center bg-white items-center">
                <InputForm label="title" height='' onChange={handleTitleChange}/>
                <InputForm label="Content" height='h-48' onChange={handleContentChange}/>
                <CategoriesCheck categories={categories} handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories}/>
                <UploadButton onChange={handleImageChange}/>
                <SubmitButton handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default FormComponent