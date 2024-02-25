import React, { useState } from 'react'

const Body = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='flex min-h-[87.3vh] bg-white dark:bg-slate-900 justify-center items-center'>
      <div className="flex flex-col gap-5">
        <h1 className={`text-center sm:text-[9rem] dark:${count > 0 ? "text-emerald-500" : count < 0 ? "text-red-500" : "text-white"} text-9xl ${count > 0 ? "text-emerald-500" : count < 0 ? "text-red-500" : "text-black"}`}>{count}</h1>
        <div className="flex gap-6">
          <button onClick={()=>setCount(count-1)} className="bg-white border border-black py-1 px-2 md:py-2 md:px-6 text-base md:text-lg sm:px-3 font-medium transition-all delay-75 hover:bg-black/80 hover:text-white rounded-md dark:bg-black dark:text-white dark:hover:bg-transparent dark:hover:text-cyan-400">Decrease</button>
          <button onClick={()=>setCount(0)} className="bg-white border border-black py-1 px-2 md:py-2 md:px-6 text-base md:text-lg sm:px-3 font-medium transition-all delay-75 hover:bg-black/80 hover:text-white rounded-md dark:bg-black dark:text-white dark:hover:bg-transparent dark:hover:text-cyan-400">Reset</button>
          <button onClick={()=>setCount(count+1)} className="bg-white border border-black py-1 px-2 md:py-2 md:px-6 text-base md:text-lg sm:px-3 font-medium transition-all delay-75 hover:bg-black/80 hover:text-white rounded-md dark:bg-black dark:text-white dark:hover:bg-transparent dark:hover:text-cyan-400">Increase</button>
        </div>
      </div>
    </div>
  )
}

export default Body