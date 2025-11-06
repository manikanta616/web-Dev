import React, { useEffect, useState } from 'react'
import axios from 'axios'
//https://picsum.photos/v2/list?page=2&limit=10


const App = () => {

    const [userData, setUserData] = useState([])
    const [index, setIndex] = useState(1)

    useEffect(function(){
        getData()
    },[index])
    const getData = async () =>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
        setUserData(response.data)
        console.log(response.data)
    }

    let printUserData = <h2 className='font-semibold text-2xl m-0 absolute top-1/2 left-1/2'>Loading...</h2>

    if(userData.length>0){
        printUserData = userData.map(function(ele,idx){
            return <div key={idx}>
                <img src={ele.download_url} className='h-50 w-60 rounded' />
                <h3>{ele.author}</h3>
            </div>
        })
    }

  return (
    <div className='bg-gray-700 text-white h-screen p-10'>
        
        <div className='flex flex-wrap gap-4'>
            {printUserData}
        </div>
        <div className='flex justify-center gap-6'>
            <button onClick={()=>{
                if(index>1){
                    setIndex(index-1)
                    setUserData([])
                }}}>                
                Prev</button>

            <button onClick={()=>{
                    setIndex(index+1)
                    setUserData([])
                }}>Next</button>
        </div>
    </div>
  )
}

export default App