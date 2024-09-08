import React from 'react'

const Note = ({ note, onDelete }) => {
    const formatedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div className=" border-b border-gray-800 w-100 py-2 px-3 mb-3">
      <p className=' text-gray-400'>{formatedDate}</p>
        <h3 className=" text-2xl py-1">{note.title}</h3>
        
        <p className='py-2'>{note.content}</p>
        
        <button className="mt-3 border-2 border-red-700 py-1 px-2 rounded  bg-red-700 hover:bg-red-500 text-white" onClick={() => onDelete(note.id)}> Delete </button>
    </div>
  )
}

export default Note