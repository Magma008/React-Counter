import React, { useEffect, useState } from 'react'
import Switcher from './Switcher'


const Header = () => {
    
    return (
        <div className='border-b-2 dark:bg-slate-900 dark:border-gray-700 dark:text-cyan-500'>
            <div className="main-container">
                <div className="flex py-3 sm:py-5 items-center justify-between">
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold">Simple Counter</h1>
                    <Switcher/>
                </div>
            </div>
        </div>
    )
}

export default Header