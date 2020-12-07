import React, { useContext } from 'react'
import { ThemContext } from '../contexts/ThemContext'
import { BookContext } from '../contexts/BookContext'

// class BookList extends Component {
//     // static contextType = ThemContext
//     render() {
//         // const { them, lightThem, darkThem } = this.context
//         return (
//             <ThemContext.Consumer>{(context) => {
//                 const { them, lightThem, darkThem } = context
//                 const themType = them ? lightThem : darkThem
//                 return (
//                     <div className="book-list" style={{background: themType.background, color: themType.color}}>
//                         <ul>
//                             <li style={{background: themType.background, color: themType.color}}>《我是好书》</li>
//                             <li style={{background: themType.background, color: themType.color}}>《我是一本书》</li>
//                             <li style={{background: themType.background, color: themType.color}}>《我是书》</li>
//                         </ul>
//                     </div>
//                 )
//             }}
//             </ThemContext.Consumer>
//         )
//     }
// }

const BookList = () => {
    const { them, lightThem, darkThem } = useContext(ThemContext)
    const { books, setBooks } = useContext(BookContext)
    const themType = them ? lightThem : darkThem

    const deleteBook = (id) => {
        const BookList = books.filter(item => {
            return item.id !== id
        })
        setBooks(BookList)
    }
    return (
        <div className="book-list" style={{background: themType.background, color: themType.color}}>
                         <ul>
                            {books.map(item => {
                                return (
                                <li key={item.id} style={{background: themType.background, color: themType.color}} onClick={() => deleteBook(item.id)}>{item.name}</li>
                                )
                            }) 
                            }
                         </ul>
                     </div>
    )

}



export default BookList