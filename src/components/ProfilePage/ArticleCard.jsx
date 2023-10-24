import React, {useEffect, useState} from 'react';
import {deleteArticleById} from '../../../utils/Articles';
import {createPortal} from 'react-dom';
import Swal from 'sweetalert2';

function ArticleCard({articles}) {

    // Fungsi untuk mengedit artikel
    const handleEdit = () => {
        // Lakukan tindakan edit
    };

    // Fungsi untuk menghapus artikel
    const showDeleteConfirmation = () => {
        Swal
            .fire({
                title: 'Konfirmasi Hapus',
                text: 'Apakah Anda yakin ingin menghapus artikel ini?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    handleDelete(); // Jika pengguna mengkonfirmasi, panggil fungsi penghapusan
                }
            });
    };

    const handleDelete = async () => {
        try {
            // Memanggil fungsi deleteArticleById dan mengirimkan article.id
            await deleteArticleById(articles.id_article);
            // Handle sukses penghapusan artikel (misalnya, perbarui daftar artikel)
            console.log('Artikel berhasil dihapus.');
            window
                .location
                .reload(); // Memuat ulang halaman
        } catch (error) {
            // Handle kesalahan penghapusan artikel
            console.error('Kesalahan saat menghapus artikel:', error);
        }
    };

    return (
        <div
            className="bg-white p-4 mb-4 shadow rounded-2xl w-full border-solid border-2 border-gray-500">
                 <div className='border border-solid border-blue-200 rounded-xl'>
                <img
                    src={articles.image}
                    alt={articles.title}
                    className="w-full h-40 object-cover"/>
            </div>
            <h3 className="text-xl font-semibold">{articles.title}</h3>
            <p className="text-gray-600">{articles.content}</p>
            <div className="mt-4">
                <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
                    Edit
                </button>
                <button onClick={showDeleteConfirmation} className="bg-red-500 text-white px-4 py-2 rounded">
                    Hapus
                </button>
            </div>
        </div>
    );
}

export default ArticleCard;
