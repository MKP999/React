import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({book}) => {
    const { dispath } = useContext(BookContext);
    return ( 
        <li onClick={() => dispath({type: 'REMOVE_BOOK', id:book.id })}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;