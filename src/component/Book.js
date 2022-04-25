import { BookContext } from "../contexts/BookContext";
import {useContext, useState, useEffect} from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import EditBook from "./EditBook";



const Book = ({book}) => {

const {deleteBook} = useContext(BookContext);

const [show, setShow] = useState (false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(() => {
    handleClose();
}, [book])

    return(

        <>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.about}</td>

            <td>
                <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteBook(book.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>          
            
            <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Update Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditBook theBook={book}/>
            </Modal.Body> 
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal> 
           
       
</>
  
    )
}

export default Book;