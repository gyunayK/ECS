import React from 'react'

const Nav_button = (props) => {
  return (
    <>
   <button className='bg-indigo-400 text-white font-[Poppins] py-2.5 px-10 rounded md:ml-8 m-auto flex justify-center hover:bg-blue-400 duration-150 text-xl '>
    {props.children}
   </button>
    </>
  )
}

export default Nav_button