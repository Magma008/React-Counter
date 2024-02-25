import React, { useEffect, useState } from 'react'
import { BsMoon } from "react-icons/bs";
import { RxSun } from "react-icons/rx";

const Switcher = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
      if (window.matchMedia("prefer-color-scheme: dark").matches) {
        setTheme("dark")
      }
      else (
        setTheme("light")
      )
    }, [])

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      }
      else (
        document.documentElement.classList.remove("dark")
      )
    }, [theme])

    const switchHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    
    
    return (
        <div>
            <button className="flex" onClick={() => switchHandler()}>
                {theme === "dark" ? <RxSun className='w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]' /> : <BsMoon className='w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]' />}
            </button>
        </div>
    )
}

export default Switcher