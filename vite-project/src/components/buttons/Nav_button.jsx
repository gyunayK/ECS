import React from 'react'

const Nav_button = (props) => {
  return (
    <>
   <button className='bg-indigo-700 text-white py-2.5 px-8 rounded-xl md:ml-8  flex justify-center m-auto hover:bg-blue-400 duration-150 text-2xl '>
    {props.children}
   </button>
    </>
  )
}

export default Nav_button