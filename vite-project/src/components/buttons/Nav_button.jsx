import React from 'react'

const Nav_button = (props) => {
  return (
    <>
   <button className='bg-indigo-700 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-purple-600 duration-500'>
    {props.children}
   </button>
    </>
  )
}

export default Nav_button