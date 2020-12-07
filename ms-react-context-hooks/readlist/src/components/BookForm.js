import React, { useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const { dispath } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispath({type:'ADD_BOOK', book:{title, author}})
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="书名" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" placeholder="作者" onChange={(e) => setAuthor(e.target.value)} value={author}/>
            <input type="submit" value="添加书籍"/>
        </form>
     );
}
 
export default BookForm;