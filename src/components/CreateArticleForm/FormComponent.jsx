import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import SubmitButton from './SubmitButton';
import CategoriesCheck from './CategoriesCheck';
import UploadButton from './UploadButton';
import { createArticle } from '@/utils/Articles';
import axios from 'axios';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('id_categories', selectedCategories.join(','));
    formData.append('file', file);
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post(
        'https://bites-journey-2.fly.dev/api/v1/article/create',
        formData,
        {
          headers: {
            'Authorization': token,
            'x-api-key': 'binar-36',
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
       window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
        const headers = new Headers({'x-api-key': 'binar-36'});

        // Mengambil data kategori dari API saat komponen dimuat
        fetch(`https://bites-journey-2.fly.dev/api/v1/category`, {headers})
            .then(
                response => response.json()
            )
            .then(data => {
                console.log(data); // Tampilkan data dalam konsol
                setCategories(data.data); // Atur data ke state Categories
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

  return (
    <div className='w-full h-full bg-blur-lg bg-white bg-opacity-40 backdrop-blur-md backdrop-filter border-black border-2 rounded-xl flex flex-col gap-5 items-center'>
      <div className="h-screen w-full flex flex-col justify-center bg-white items-center">
        <InputForm label="title" height='' onChange={handleTitleChange} value={title} />
        <InputForm label="Content" height='h-48' onChange={handleContentChange} value={content} />
        <CategoriesCheck categories={categories} handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories} />
        <UploadButton onChange={handleImageChange} />
        <SubmitButton handleSubmit={handleSubmit} />
        
      </div>
    </div>
  );
};

export default FormComponent;
