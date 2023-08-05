import React from 'react'

const Header = () => {

  const imgUrl = 'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png'

  return (
    <div className='flex items-center justify-center py-6 border-b border-gray-500'>
      <div className='flex items-center gap-8'>
        <img src={imgUrl} alt="logo" className='h-20 w-20' />
        <h1 className='text-5xl font-bold uppercase'>Code Ladder</h1>
      </div>
    </div>
  )
}

export default Header
