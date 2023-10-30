import React from 'react'

const inputEdit = ({placeholder,value}) => {
   const inputContainerClass = `m-2 relative w-1/2 border-2 border-black ring-2 ring-offset-lime-50 rounded-lg  'h-auto'}`
  
   const inputBorder = `border rounded-md w-full  p-2 text-center text-black h-full'}`
  return (
    <div className={inputContainerClass}>
      <label htmlFor={placeholder} className="absolute text-black -top-2 left-2 bg-white px-1">
       {placeholder}
      </label>
      <input
        type="text"
        id={placeholder}
        name={placeholder}
        className={inputBorder}
      />
    </div>
  )
}

export default inputEdit