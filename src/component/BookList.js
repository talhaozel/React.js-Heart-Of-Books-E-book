import { useContext, useState, useEffect} from 'react';
import Book from "./Book";
import { BookContext } from '../contexts/BookContext';
import { Button, Modal } from 'react-bootstrap';
import AddBook from "./AddBook";
import Home from "./Home";
import BookCard from './BookCard';



const BookList = () => {

   const {books} = useContext(BookContext)

   const [show, setShow] = useState (false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

    useEffect (() => {

      handleClose();

   }, [books])


    return(
        <>
  
        <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Books</b></h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal">
              <i className="material-icons">&#xE147;</i> 
              <span>Add New Book</span>	</Button>				
          </div>
        </div>
      </div>

        <table className="table table-striped table-hover">
			<thead>
				<tr> 
			    <th>Name</th>
					<th>Author</th>
					<th>Category</th>
          <th>About</th>
					<th>Actions</th>
				</tr>
			</thead>
            <tbody>
              {
                books.map((book) => (
                  <tr key={book.id}>
                    <Book book={book} />
                  </tr>
                ))             
                }
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Add Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddBook/>
            </Modal.Body> 
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal>
        
        </>
    )
}

export default BookList;