import React from 'react';
import Link from 'next/link';

function Card({article,onClick}) {
    return (
      <div
      className="bg-cover bg-center bg-no-repeat bg-blur w-3/4 h-40 relative rounded-lg overflow-hidden shadow-lg mb-4"
      style={{ backgroundImage: `url(http://localhost:9000/public/${article.image})` }}
      onClick={() => onClick(article)} // Memanggil event onClick saat card diklik
  >        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent p-4">
          <div className="text-white">
            <Link href={`/Article/${article.id_article}`} className="text-stone-900 hover:text-lime-400">
            <h2 className="text-xl text-white hover:text-lime-200 font-semibold">{article.title}</h2>
            <p>{article.author}</p>
            <p className="mt-2 hover:text-lime-200 text-white">{article.content}</p>
            </Link>
          </div>
        </div>
      </div>
      
    );
}

export default Card;
