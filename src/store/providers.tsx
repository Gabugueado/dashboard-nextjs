'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, store } from '.'


interface Props {
  children: React.ReactNode
 
}
export const Providers = ({ children, }: Props) => {

  const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    storeRef.current = store()
  }

  return (
    <Provider store={storeRef.current}>
      { children }
    </Provider>
    )
}
