import { Form, Button } from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import { useState, useContext } from 'react'

const AddBook = () => {

   const { addBook } = useContext(BookContext);


   const [newBook, setNewBook] = useState({
       name:"" , author:"", category:"", about:""
   })

   const {name, author, category, about} = newBook;

   const onInputChange = (e) => {
       setNewBook({...newBook, [e.target.name]: e.target.value })
   }

   const handleSubmit = (e) => {
        e.preventDefault();
        addBook(name, author, category, about);
}


    return ( 
        <Form onSubmit={handleSubmit}>
       
       <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="author *"
                    name="author"
                    value={author}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as ="textarea"
                    placeholder="category *"
                    name="category"
                    value={category}
                    onChange={e => onInputChange(e)}
                    rows={3}
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="about *"
                    name="about"
                    value={about}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>
            
            
            <Button variant="success" type="submit" >
                 Add new Book
            </Button>

        </Form>
            
        )
}

export default AddBook;




  