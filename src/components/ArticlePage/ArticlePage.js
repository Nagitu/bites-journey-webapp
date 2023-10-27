import React, {useEffect, useState} from 'react';
import {getArticles} from '../../../utils/Articles';
import Card from './Card'; // Import komponen Card
import SideContent from './SideContent';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const articlesData = await getArticles();
                if (articlesData.length === 0) {
                    setError('Belum ada artikel yang dibuat.');
                } else {
                    setArticles(articlesData);
                    console.log(articlesData);

                    // Mulai interval untuk mengganti gambar setiap 5 detik
                    const imageChangeInterval = setInterval(() => {
                        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % articlesData.length);
                    }, 5000);
                }
            } catch (error) {
                setError('Terjadi kesalahan saat mengambil data artikel.');
                console.error('Kesalahan:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex h-full m-20 sm:m-10 p-8">
            <main className="w-full sm:w-full overflow-hidden flex flex-col ">
                {
                    error
                        ? (<p>{error}</p>)
                        : (articles.map((article, index) => (
                            <Card key={article.id} article={article} visible={index === currentImageIndex}/>
                        )))
                }
            </main>
            <aside className="hidden sm:block w-1/4">
                <SideContent articles={articles}/>
            </aside>
        </div>
    );
};

export default ArticlePage;
