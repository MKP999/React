import React, { createContext, useState }  from 'react'

export const BookContext = createContext() 

const BookContxtProvider = (props) => {
    const [ books, setBooks ] = useState([
        {name: '《我是好书》', id: 1},
        {name: '《我是一本书》', id: 2},
        {name: '《我是书》', id: 3}
    ])

    return (
        <BookContext.Provider value={{books, setBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContxtProvider