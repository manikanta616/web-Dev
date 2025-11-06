import React from 'react'

const Note = ({ele}) => {
  return (
    <div className='flex flex-col justify-center '>
        <div className='ml-2 font-semibold '>
            <h1>{ele.title}</h1>
        </div>
        <div className='ml-2'>
            <h3>{ele.details}</h3>
        </div>
    </div>
  )
}

export default Note