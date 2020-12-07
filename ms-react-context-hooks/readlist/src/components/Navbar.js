import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>我的阅读清单</h1>
            <p>当前待阅读的书籍有：{books.length}本。</p>
        </div>
     );
}
 
export default Navbar;
