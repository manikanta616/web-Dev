import React, { useState } from 'react'
import Note from './Note'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const [search, setsearch] = useState('')
  const [editIndex, seteditIndex] = useState(null)

  const formSubmit = (e) =>{

// Creating array to store notes     

    e.preventDefault()

    if (title.trim() === "" || details.trim() === "") {
    return;
  }
    let copytask = [...task]

    if(editIndex === null){
      copytask.push({title,details})
    }else{
      copytask[editIndex] = {title,details}
      seteditIndex(null)
    }
    
    settask(copytask)
    settitle('')
    setdetails('')

  }
// Deleting selected note  
  const removeNote = (idx) =>{

    const copytask = [...task]
    copytask.splice(idx, 1)
    settask(copytask)

  }
  const filteredNotes = task.filter(note => 
  note.title.toLowerCase().includes(search.toLowerCase()) ||
  note.details.toLowerCase().includes(search.toLowerCase()))

  return (
// Header //
    <div className='pb-6  bg-gray-300'>
      <div>
          <div className='bg-gray-800 text-white  flex justify-between items-center'>
            <h1 className='text-3xl h-20 py-5 pl-9'>Notes</h1>      
          </div>
    
          <div className='py-4 px-2'>
            <input type="text" placeholder='search' 
            value={search} onChange={(e)=>{
              setsearch(e.target.value)
            }}
            className='border w-full h-10 px-4' />
          </div>
      </div>
{/* Taking User Note */}
    <form onSubmit={(e)=>{formSubmit(e)}} >

      <div className='px-2 flex'>
        <input type="text" placeholder='Title' value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        className='border-3 w-full h-15 p-4 font-semibold text-xl mb-0.5  bg-gray-400'
      />
      </div>

      <div className='px-2 flex'>
        <textarea type="text" placeholder='Note' value={details}
          onChange={(e)=>{
            setdetails(e.target.value)
          }}
          className='border-3 w-full h-70 p-4 font-semibold text-xl mb-1  bg-gray-400 '
        />
      </div>

      <div className='flex justify-center'>
        <button className='border bg-gray-500 py-3 px-43.5 active:scale-95 text-white font-semibold'>
        {editIndex===null? 'Add' : 'Update'}
      </button>
      </div>

    </form>
{/* Printing All Notes  */}
    <div className='flex flex-col px-7 mt-4'>
      <div className='h-full w-full  flex gap-9 flex-col overflow-auto '>
        
        {filteredNotes.map(function(ele,idx){
        return <div key={idx} className='border-2 min-h-40 p-1 flex flex-col justify-between bg-gray-400'>
         
        <Note ele={ele}/>
        <div className='flex justify-center'>
          <button className='bg-blue-400 text-white p-1 mr-6'
            onClick={()=>{
              seteditIndex(idx)
              settitle(ele.title)
              setdetails(ele.details)
            }}
          >
            Edit
          </button>
          <button
          onClick={()=>{removeNote(idx)}}
          className='bg-red-400 text-white p-1'
        >Remove</button>
        </div>
        </div>
      })}
      </div>
    </div>
    </div>
  )
}

export default App