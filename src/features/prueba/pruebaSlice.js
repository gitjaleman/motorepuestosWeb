import {createSlice} from '@reduxjs/toolkit'

const  initialState = [
    {
        id:"1",
        tittle: "tittle 1",
        description: "description 1",
        completed: false
    },
    {
        id:"2",
        tittle: "tittle 2",
        description: "description 2",
        completed: false
    },
]

export const pruebaSlice = createSlice({
    name: 'prueba',
    initialState,
    reducers:{

    }
})

export default pruebaSlice.reducer