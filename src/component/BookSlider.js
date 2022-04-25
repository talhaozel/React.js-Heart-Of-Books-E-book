import React from 'react'
import { Button, Carousel} from 'react-bootstrap';
import { BookContext } from '../contexts/BookContext';
import {useContext,useState} from 'react'
import Book from './Book';
import { book } from 'fontawesome';


 const BookSlider = ({book}) => {

    const {books} = useContext(BookContext);

   
        return (
            <>
    <h1>SLIDER  BAKILCAKAKKKKK</h1>
        
             {books.map((book)=>{
                 return(
                   <Carousel key={book.id} book={book}>   
                       <Carousel.Item>
        <img
        className="d-block w-100"
        src={book.image}
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={book.image}
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={book.image}
        />

    </Carousel.Item>
    </Carousel>
                 )
             })}
            
           
  
            
            
            
            </>
        
        )






}












export default BookSlider;