import React from 'react'

const ActionButton = ({onCancel,onSave}) => {
  return(

    <div className="mt-4">
    <button
      onClick={onSave}
      className="bg-blue-500 text-white rounded-lg py-2 px-4 mr-2 hover:bg-blue-600"
    >
      Simpan
    </button>
    <button
      onClick={onCancel}
      className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4 hover-bg-gray-400"
    >
      Batal
    </button>
  </div>
  )
  
}

export default ActionButton