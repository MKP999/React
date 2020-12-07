import React, { useState } from 'react'

const Food = () => {
    
    const getRandomNum = () => {
        let min = 1
        let max = 98
        let x = Math.floor((Math.random() * max + min)/2) * 2
        let y = Math.floor((Math.random() * max + min)/2) * 2
        return [x, y]
    }
    
    const [ foodDot ] = useState([getRandomNum()[0], getRandomNum()[1]])  // setFoodDot

    return (
        <div className="food" style={{top: `${foodDot[0]}%`, left: `${foodDot[1]}%`}}></div>
    )
}

export default Food

