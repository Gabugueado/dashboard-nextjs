'use client'
import { useState } from "react"

interface Props {
  value?: number;
}

export const CartCounter = ({value = 10 }:Props) => {

  const [counter, setcounter] = useState(value)

  return (
    <>
      <span className="text-9xl">{ counter }</span>

      <div className="flex flex-row items-center justify-center w-full mt-4">
        <button 
          onClick={() => setcounter(counter + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button 
        onClick={() => setcounter(counter - 1)}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}
