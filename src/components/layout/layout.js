import {React} from 'react'
//import './main.scss'
import { Container } from "reactstrap";
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
      
  <div className="wrapper">
     <Header/>
        <Container className="mx-auto">
  
        {children}
  
        </Container>
  
        <Footer/>
   </div>
      
    );
  }

