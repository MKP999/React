import React, { createContext, useReducer, useEffect } from 'react'
import { BookReaduer } from '../reducers/BookReducer'

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, dispath] = useReducer(BookReaduer, [], () => {
        const result = localStorage.getItem('books')
        return result ? JSON.parse(result) : []
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    return ( 
        <BookContext.Provider  value={{books, dispath}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;