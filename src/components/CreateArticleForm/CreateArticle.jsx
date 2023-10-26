import React, {useState, useEffect} from 'react';
import {createArticle} from '../../../utils/Articles';
import axios from 'axios';

const CreateArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleImageChange = (e) => {
        const file = e
            .target
            .files[0];
        setImage(file);
    };
    const handleCategoryChange = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([
                ...selectedCategories,
                categoryId
            ]);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        const token = localStorage.getItem('token')
        // Append the form fields to the FormData object
        formData.append('title', title);
        formData.append('content', content);

        // Extract the IDs from selectedCategories
        const selectedCategoryIds = selectedCategories.map((category) => category.id);

        // Append selected categories as an array
        formData.append('id_categories', selectedCategoryIds);

        // Append the image file
        formData.append('file', image);

        try {
            const response = await axios.post(
                'http://localhost:9000/api/v1/article/create',
                formData,
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/form-data', // Atur tipe konten untuk FormData
                    }
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const headers = new Headers({'x-api-key': 'binar-36'});

        // Mengambil data kategori dari API saat komponen dimuat
        fetch(`http://localhost:9000/api/v1/category`, {headers})
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
        <div
            className='w-7/12 h-3/4 border-violet-400 border-2 rounded-xl flex flex-col gap-5 items-center'>
            <div
                className="m-2 relative w-3/4 border-2 border-blue-400 ring-2 ring-offset-lime-50 rounded-lg">
                <label
                    htmlFor="title"
                    className="absolute text-black -top-2 left-2 bg-white px-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    className="border rounded-md w-full p-2 text-center"/>
            </div>
            <div
                className="m-4 relative w-3/4 h-48 border-2 border-blue-400 ring-2 ring-offset-lime-50 rounded-lg">
                <label
                    htmlFor="content"
                    className="absolute text-black -top-2 left-2 bg-white px-1">
                    Content
                </label>
                <textarea
                    placeholder='Type a containt here'
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                    className="border text-black rounded-md w-full h-48 p-2"/>
            </div>
            <div className="mb-4 relative flex flex-col items-center">
                <label htmlFor="categories" className="text-black bg-white px-1">
                    Categories
                </label>
                <div className="flex flex-wrap text-black">
                    {
                        categories && categories.length > 0
                            ? (categories.map((category) => (
                                <div key={category.id_category} className="mr-4">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={category.id_category}
                                            checked={selectedCategories.includes(parseInt(category.id_category, 10))}
                                            onChange={() => handleCategoryChange(parseInt(category.id_category, 10))}/>{' '}
                                        {category.title}
                                    </label>
                                </div>
                            )))
                            : (<p>Loading categories...</p>)
                    }
                </div>
            </div>
            <div className="mb-4 relative p-2">
                <label htmlFor="image" className="absolute -top-2 left-2 bg-transparent px-1">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded-md w-full p-2"/>
            </div>
            
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-black rounded-lg p-2 w-1/4 self-center hover:bg-blue-700">
                    Submit
                </button>
            
        </div>

    );
};

export default CreateArticleForm;
