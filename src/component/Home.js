import { BookContext } from "../contexts/BookContext";
import {useContext, useState, useEffect} from 'react';
import { Button, Modal, Card, Nav, Container } from 'react-bootstrap';
import EditBook from "./EditBook";



const Home = () => {

    return(

        <>
 <>
 <ul className="nav nav-tabs mb-5">
  <li >
    <a className="nav-link-logo" href="#"><img src="https://i.ibb.co/Qn4kG8K/logo.png"/></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Login(Admin)</a>
  </li>
  
  <li className="nav-item">
    <a className="nav-link" href="#">BookCategory</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
</ul>

</>
         
</>
  
    )
}

export default Home;
