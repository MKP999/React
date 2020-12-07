import React from 'react'

const Snake = ({snakeDots}) => {

    return (
        <>
            {snakeDots.map((dot, i) => {
                return (
                    <div className="snake-dots" style={{top: `${dot[0]}%`, left: `${dot[1]}%`}} key={i}></div>
                )
            })}
        </>
    )
}

export default Snake