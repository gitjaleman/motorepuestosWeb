import {configureStore} from '@reduxjs/toolkit'
import prueReducer from '../features/prueba/pruebaSlice'

export const store = configureStore({
    reducer:{
        prueba: prueReducer
    }
    

})
