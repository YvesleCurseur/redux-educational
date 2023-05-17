import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { colorChange } from '../features/theme'

const ChangeColor = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
    console.log(color)

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={() => dispatch(colorChange(color))}>Change Color</button>
        </div>
    )
}

export default ChangeColor;