import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ApiContext } from '../API'

const categories = () => {

const {category} = useContext(ApiContext)

  
  return (
    <div className='px-15 pt-4 bg-[#de914e] min-h-screen pb-[4vh]'>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {category.map((ele,id) => (
          <div key={id} className="border rounded-xl p-3 text-center bg-[#FEC264]  hover:scale-105 transition">
            <Link to={`/category/${ele.strCategory}`} >
              <img
              src={ele.strCategoryThumb}
              alt={ele.strCategory}
              className="w-40 h-40 object-cover mx-auto rounded-lg"
            />
            </Link>
            <h3 className="mt-2 font-semibold text-2xl">{ele.strCategory}</h3>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default categories