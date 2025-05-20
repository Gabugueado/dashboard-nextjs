import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';


export const store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice

    },
  })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()