import React, { useState } from 'react'
import banner from './../assets/Images/image2.png'
import { IoSearch } from "react-icons/io5";

function Search() {
    const tags=[
        {
            id:1,
            name:'All',
        },
        {
            id:2,
            name:'React',
        },
        {
            id:3,
            name:'React Native',
        },
        {
            id:4,
            name:'Angular',
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center mt-8 flex-col 
    px-[70] md:px-[150px]'> 
        <img src={banner} className='rounded-2xl h-[300px] '/>
        <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
            <IoSearch className='text-[20px] text-gray-400'/>
            <input type='text' placeholder='Search' 
            className='outline-none ml-2'/>
        </div>
        <div className='flex gap-10 justify-center mt-5'>
            {tags.map((item, index)=>(
                <ul onClick={()=>setActiveIndex(index)} className={`${index==activeIndex? 
                'bg-orange-500 text-white':null} p-1 pb-2 rounded-sm
                md:rounded-full cursor-pointer md:px-4
                hover:scale-110 hover:border-[1px] border-orange-500 transition-all duration-100 ease-in-out`}>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Search