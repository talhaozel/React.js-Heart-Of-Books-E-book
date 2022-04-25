import { Form, Button } from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import { useState, useContext } from 'react'

const EditBook = ({theBook}) => {

   const { updateBook } = useContext(BookContext);

   const book = theBook;
   const id = book.id;

   const [name, setName] = useState(book.name);
   const [author, setAuthor] = useState(book.author);
   const [category, setCategory] = useState(book.category);
   const [about, setAbout] = useState(book.about);

   const updatedBook = {id, name, author, category, about}
  
   const handleSubmit = (e) => {
       e.preventDefault();
       updateBook(id, updatedBook);
   }


    return ( 
        <Form onSubmit={handleSubmit}>
            
            <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="Name *"
                    name="name"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}                  
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="Email *"
                    name="email"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}                  
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as ="textarea"
                    placeholder="Adress *"
                    name="adress"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}                  
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type ="Text"
                    placeholder="Name *"
                    name="name"
                    value={about} 
                    onChange={(e)=>setAbout(e.target.value)}                  
                    required
                />
            </Form.Group>
                      
            <Button variant="success" type="submit" >
                 Update Book
            </Button>

        </Form>
            
        )
}

export default EditBook;


  