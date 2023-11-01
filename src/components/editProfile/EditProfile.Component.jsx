import React, { useState } from 'react';
import EditProfileInput from './editProfile.input';
import ActionButton from './Action.Button';
import { updateUSer } from '@/utils/Profile';


const EditProfileForm = ({ userData, onCancel }) => {
  const [formData, setFormData] = useState({
    email: userData.data.email,
    name: userData.data.name,
    phone :userData.data.phone,
    adddress : userData.data.address
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formDatas = new FormData();
      formDatas.append('phone', formData.phone);
      formDatas.append('address', formData.address);
      formDatas.append('email', formData.email);
      formDatas.append('name', formData.name);
      console.log(formDatas);
      const response = await updateUSer(formDatas)
      
      if (response.status === 200) {
        // Data berhasil diperbarui, lakukan sesuatu jika perlu
        console.log('Data berhasil diperbarui');
        window.location.reload()
      }
    } catch (error) {
      // Tangani kesalahan jika terjadi
      console.error('Terjadi kesalahan saat mengirim data:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Profil</h2>
      <EditProfileInput label="Email" name="email" value={formData.email} onChange={handleInputChange} />
      <EditProfileInput label="Nama" name="name" value={formData.name} onChange={handleInputChange} />
      <EditProfileInput label="phone" name="phone" value={formData?.phone} onChange={handleInputChange} />
      <EditProfileInput label="address" name="address" value={formData?.address} onChange={handleInputChange} />
      <ActionButton onSave={handleSubmit} onCancel={onCancel} />
    </div>
  );
};

export default EditProfileForm;
