import React, { useEffect, useState } from 'react';
import { deleteArticleById } from '../../utils/Articles';
function ArticleCard({ articles }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fungsi untuk mengedit artikel
  const handleEdit = () => {
    // Lakukan tindakan edit
  };

  // Fungsi untuk menampilkan konfirmasi penghapusan
  const showDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  // Fungsi untuk mengkonfirmasi penghapusan
  const confirmDelete = async () => {
    try {
        // Memanggil fungsi deleteArticleById dan mengirimkan article.id
        await deleteArticleById(articles.id_article);
        // Handle sukses penghapusan artikel (misalnya, perbarui daftar artikel)
        console.log('Artikel berhasil dihapus.');
        window.location.reload(); // Memuat ulang halaman
      } catch (error) {
        // Handle kesalahan penghapusan artikel
        console.error('Kesalahan saat menghapus artikel:', error);
      }
  };

  // Fungsi untuk membatalkan penghapusan
  const cancelDelete = () => {
    setShowConfirmation(false);
  };


  return (
    <div className="relative bg-opacity-40 backdrop-filter rounded-lg p-6 mx-auto max-w-sm">
      {showConfirmation ? (
        <div>
          <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 mr-2 rounded">
            Ya
          </button>
          <button onClick={cancelDelete} className="bg-blue-500 text-white px-4 py-2 rounded">
            Tidak
          </button>
        </div>
      ) : (
        <div>
          <div key={articles.id_article} className='border  border-solid border-blue-200 rounded-xl' >
            <img
              src={`http://localhost:9000/public/${articles.image}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold">{articles.title}</h3>
          <p className="text-gray-600">{articles.content}</p>
          <div className="mt-4">
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
              Edit
            </button>
            <button onClick={showDeleteConfirmation} key={articles.id_article} className="bg-red-500 text-white px-4 py-2 rounded">
              Hapus
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
