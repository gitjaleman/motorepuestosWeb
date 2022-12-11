import React from 'react'
import {useSelector} from 'react-redux'

const pruebaStateSelect = () => {
    const prueba =  useSelector(state=>state.prueba)
    console.log(prueba)
    return (
        <div>
            {
                prueba.map(prueba=>(
                    <div key={prueba.id}>
                        <h3>{prueba.tittle}</h3>
                        <p>{prueba.description}</p>
                    </div>
                ))

            }
        </div>
    )
}

export default pruebaStateSelect