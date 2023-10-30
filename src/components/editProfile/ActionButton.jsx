import React from 'react'

const ActionButton = ({label,onchange}) => {
  return (
    <button onClick={onchange} className='text-white rounded-xl h-10 self-center w-full bg-blue-900'>
        {label}
    </button>
  )
}

export default ActionButton