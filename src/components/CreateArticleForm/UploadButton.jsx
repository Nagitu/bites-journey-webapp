import React from 'react'

const UploadButton = ({onChange}) => {
  return (
    <div className="mb-4 relative p-2 border-2 border-black rounded-xl">
      <label htmlFor="image" className="absolute -top-2 left-2 bg-transparent px-1">
        Image
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={onChange}
        className="border rounded-md w-full p-2"
      />
    </div>
  )
}

export default UploadButton