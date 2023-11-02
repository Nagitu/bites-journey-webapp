import React, { useEffect, useState } from 'react';
import { getArticles } from '../../utils/Articles';
import Card from './Card';
import SideContent from './SideContent';
import DetailPage from './DetailPage'; // Import komponen DetailPage

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null); // State untuk artikel yang sedang dipilih

    useEffect(() => {
        async function fetchData() {
            try {
                const articlesData = await getArticles();
                if (articlesData.length === 0) {
                    setError('Belum ada artikel yang dibuat.');
                } else {
                    setArticles(articlesData);

                    // ...

                }
            } catch (error) {
                setError('Terjadi kesalahan saat mengambil data artikel.');
                console.error('Kesalahan:', error);
            }
        }

        fetchData();
    }, []);

    // Fungsi untuk menangani klik pada card
    const handleCardClick = (article) => {
        setSelectedArticle(article);
    };

    return (
        <div className="flex h-screen m-20 sm:m-10 p-8">
            <main className="w-full sm:w-full overflow-auto flex flex-col">
                {error ? (
                    <p>{error}</p>
                ) : (
                    articles.map((article, index) => (
                        <Card
                        article={article}
                        visible={index === currentImageIndex}
                        onClick={() => handleCardClick(article)}
                        key={article.id}
                        className="w-72 h-96" 
                    />
                    ))
                )}
            </main>
            <aside className="hidden sm:block w-1/4">
                <SideContent articles={articles} />
            </aside>
        </div>
    );
};

export default ArticlePage;
