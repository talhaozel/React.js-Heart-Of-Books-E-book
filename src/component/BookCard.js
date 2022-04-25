import { BookContext } from "../contexts/BookContext";
import {useContext, useState, useEffect} from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import EditBook from "./EditBook";



const BookCard = ({book}) => {

const {deleteBook} = useContext(BookContext);

const [show, setShow] = useState (false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(() => {
    handleClose();
}, [book])

    return(

        <>

    <Card className="card">
    <Card.Img className="c-img" variant="top" src={book.image} />
    <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
        {book.author}
        </Card.Text>
        <Button  variant="primary">Read Book</Button>
        <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={() => deleteBook(book.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>

    </Card.Body>
    </Card>

       
</>
  
    )
}

export default BookCard;