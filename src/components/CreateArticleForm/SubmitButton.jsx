import React from 'react'

const SubmitButton = ({handleSubmit}) => {
  return (
  <button
    type="submit"
    onClick={handleSubmit}
    className="bg-blue-500 text-black rounded-lg p-2 w-1/4 self-center hover:bg-blue-700">
    Submit
</button>
  )
}

export default SubmitButton