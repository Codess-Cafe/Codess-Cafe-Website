
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Main from './main'
import Form from './contactForm';
const Heading=()=>{

    return (
      <div className="header">
        <Navbar/>
        <h1 id="heading">CONTACT US!</h1>
        <div className="bottom-underline"></div>
       <Form/>
      <Main/>
   
      
      <style jsx>{`
      h1{
        margin-top:90px;
      
      }
      Form{
        margin-bottom:100px;
      }
      .bottom-underline{
        border-bottom:7px solid #1E90FF;
        width: 90px;
      margin-left:47%;
        
    }
            `}</style>
      </div>


     
    );
}
export default Heading;