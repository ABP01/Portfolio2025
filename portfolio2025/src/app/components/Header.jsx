import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
            <h1>
                <a href="/" className='logo'>
                <img src="/src/assets/png-ab.ico" alt="Armel Bogue" width={40} height={40} />
                </a>
                ArmelBogue
            </h1>
            <h2>AJHdbh</h2>
        </div>
    </header>
  )
}

export default Header