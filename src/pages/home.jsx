// pages/index.js
import Navbar from '@/components/navbar';
import Main from '../components/main';
import { AuthProvider } from '../../utils/AuthContext';


const home = () => {
  // Data artikel Anda bisa dimuat di sini
  const articles = [
    {
      title: 'Judul Artikel 1',
      slug: 'judul-artikel-1',
      description: 'Deskripsi artikel 1.',
      author: 'Penulis 1',
      date: '1 Januari 2023',
    },
    // Tambahkan artikel lainnya di sini
  ];
  const isLoggedIn = true; 
  return (
    <div>
      <AuthProvider>

      <Navbar isLoggedIn={isLoggedIn} />
      <div className="container">
        {articles.map((article, index) => (
          <Main key={index} article={article} />
        ))}
      </div>
      </AuthProvider>
    </div>
  );
};

export default home;