'use client'
import { IoCalculatorOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'


export const WidgetsGrid = () => {


  const count = useAppSelector( state => state.counter.count )
  
  const widget = [
    {
      title: `${count}`,
      subtitle: "counter page",
      label: "Este es el contador",
      icon: <IoCalculatorOutline size={40} />,
      href: "/dashboard/counter",
    }
  ]

  return (
    <div className="flex flex-wrap p-2 justify-center" >
      {
        widget.map(( item ) =>
          <SimpleWidget  key={item.href} {...item} />
        )
      }
    </div> 
  )
}