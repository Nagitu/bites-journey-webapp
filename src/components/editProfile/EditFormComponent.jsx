import React from 'react'
import ActionButton from './ActionButton'
import InputEdit from './InputEdit'
const EditFormComponent = () => {

    const handleEdit = () =>{
        console.log('ini tombol edit');
    }
  return (
    <div className='flex flex-col  items-center rounded-lg border-solid bg-grey-500 bg-opacity-50 '>
        <InputEdit placeholder={'title'} value={'ini title'} />
        <InputEdit placeholder={'content'} value={'ini content'} />
        <ActionButton label={simpan} onchange={handleEdit}/>
    </div>
      )
}

export default EditFormComponent