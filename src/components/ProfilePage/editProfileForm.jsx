import React, { useState } from 'react';

const EditProfileForm = ({ userData, onCancel, onSave }) => {
  const [editedData, setEditedData] = useState({
    username: userData.data.username,
    email: userData.data.email,
    name: userData.data.name,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Lakukan logika untuk menyimpan perubahan
    // Panggil onSave(editedData) untuk menyimpan data
  };

  return (
    <div >
      <h2>Edit Profil</h2>
      <label>Username:
        <input
          type="text"
          name="username"
          value={editedData.username}
          onChange={handleInputChange}
          className='border-solid border-black text-black rounded-lg bg-black'
        />
      </label>
      <label>Email:
        <input
          type="text"
          name="email"
          value={editedData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>Nama:
        <input
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSubmit}>Simpan</button>
      <button onClick={onCancel}>Batal</button>
    </div>
  );
};

export default EditProfileForm;
