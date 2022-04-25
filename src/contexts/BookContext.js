import { createContext, useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()


const BookContextProvider = (props) => {

    const [books, setBooks] = useState( 
        [
            {id:uuidv4(), name:'CAT KID',           author:'DAV PILKEY',   category:'COMICS',   about:'TREE-HOUSE COMIX PRESENTS'},
            {id:uuidv4(), name:'DOG MAN	',          author:'DAV PILKEY',   category:'COMICS',   about:'CREATOR OF CAPTAIN UNDERPANTS'},
            {id:uuidv4(), name:'SISTERS OF BATTLE', author:'MARVEL',       category:'ANIMATION',about:'WARHAMMER'},
            {id:uuidv4(), name:'LORE OLYMUS	',      author:'ALISON WEIR',  category:'KIDS',     about:'THE #1 WEBTOON PHENOMENON'},
            {id:uuidv4(), name:'THEVIII	',          author:'RACHEL SMYTHE',category:'HISTORY',  about:'THE ABSORBING BESTSELLER'}
])

useEffect(() => {
    const books = localStorage.getItem('books');
    setBooks(JSON.parse(books))
}, [])

useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
})

    const addBook =  ( name, author, category, about) => {
        setBooks([...books, {id:uuidv4(), name, author, category, about}])
    }   

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !==id))
    }

    const updateBook = (id, updatedBook) => {

        setBooks(books.map((book) => (book.id === id ? updatedBook : book)))      
    }

        return (
            <BookContext.Provider value={{books, addBook, deleteBook, updateBook}}>
                {props.children}
            </BookContext.Provider>
        )

}


export default BookContextProvider;







