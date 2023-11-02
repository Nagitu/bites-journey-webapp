import {useEffect, useState} from 'react';
import {getArticleByID} from '../../utils/Articles';

function DetailPage({id}) {
    const [article, setArticle] = useState(
        {title: 'Loading...', image: 'https://bites-journey-2.fly.dev/public/default-image.jpg', content: 'Loading...'}
    );

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const data = await getArticleByID(id); // Panggil fungsi async
                const {title, image, content} = data.data[0];
                console.log(data);
                setArticle({title, image: `http://localhost:9000/public/${image}`, content});
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    return (
        <div className="rounded-xl border border-solid border-gray-500 max-w-screen-lg mx-auto p-4">
        <div className="border border-solid border-blue-200 rounded-xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="border border-solid border-y-0 p-4">
          <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-600">{article.content}</p>
        </div>
      </div>
      

    );
}

export default DetailPage
