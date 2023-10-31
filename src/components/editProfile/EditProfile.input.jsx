

import React from 'react'

const EditProfileInput = ({label,name,onChange,value}) => {
  return (
    <label className="block mb-2 w-full">
    {label}:
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-400 rounded-lg p-2 block w-full"
    />
  </label>
  )
}

export default EditProfileInput