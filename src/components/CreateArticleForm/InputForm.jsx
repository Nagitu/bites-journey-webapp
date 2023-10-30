import React, { useState } from 'react';

const InputForm = ({ label ,height,onChange}) => {

    const inputContainerClass = `m-2 relative w-1/2 border-2 border-black ring-2 ring-offset-lime-50 rounded-lg ${height || 'h-auto'}`
    const inputBorder = `border rounded-md w-full  p-2 text-center text-black ${height || 'h-full'}`
  return (
    <div className={inputContainerClass}>
      <label htmlFor={label} className="absolute text-black -top-2 left-2 bg-white px-1">
        {label}
      </label>
      <textarea
        type="text"
        id={label}
        name={label}
        onChange={onChange}
        className={inputBorder}
      />
    </div>
  );
};

export default InputForm;
