
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Main from './main'
import {IoIosSend} from 'react-icons/io'

const Form=()=>{

    return (
      <div className="form">
          <section id="contact">
  
  <div className="contact-wrapper">
  
  <div className="direct-contact-container">
      <Image 
                    src="/undraw_Opened_re_i38e.png"
                    height={500}
                    width={750}
                    alt="mail-logo"
                />
      </div>
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required/>
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
        <IoIosSend/><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  
   
    
  </div>
  
</section>  
  
  

      
      <style jsx>{`
        #contact {
            width: 100%;
            height: 100%;
          }
          
          .section-header {
            text-align: center;
            margin: 0 auto;
            padding: 40px 0;
            font: 300 60px 'Oswald', sans-serif;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 6px;
          }
          
          .contact-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width:1000px;
          }
          
          .form-horizontal {
         
            font-family: 'Lato';
            font-weight: 400;
          }
          
          .form-control, 
          textarea {
           
            margin-bottom:15px;
            letter-spacing: 1px;
          }
          
          .send-button {
            margin-top: 15px;
            height: 34px;
            width: 500px;
            overflow: hidden;
            transition: all 0.2s ease-in-out;
          }
          
          .alt-send-button {
          
            transition: all .2s ease-in-out;
          }
          input:focus{
              box-shadow:none;
              border: 2px solid #1E90FF;
          }
        textarea:focus{
            box-shadow:none;
            border: 2px solid #1E90FF;
        }
          
          .send-text {
            display: block;
            margin-top: 10px;
            font: 700 12px 'Lato', sans-serif;
            letter-spacing: 2px;
          }
          
          .alt-send-button:hover {
            transform: translate3d(0px, -29px, 0px);
          }
          
     
          hr {
            border-color: rgba(255,255,255,.6);
          }
          
          @media screen and (max-width: 700px) {
            .contact-wrapper {
                display: flex;
                flex-direction: column-reverse;
               width:100%;
               
               margin-bottom:100px;
              }
            .direct-contact-container {
              margin-top: 60px;
           
            }    
         
          }
          
          @media screen and (max-width: 569px) {
            
            .contact-wrapper {
                display: flex;
                flex-direction: column-reverse;
                margin-left:0px;   
               
              }
            .direct-contact-container, .form-wrapper {
              float: none;
              
            }  
            .send-button {
              width:100%;
              padding:0;
             }
             .send-button span{
                 width:100%;
                 padding:0;
                }
                
             
          
          }
          
          @media screen and (max-width: 410px) {
            .send-button {
             width:100%;
             padding:0;
            }
            .send-button span{
                width:100%;
                padding:0;
               }
               
            
            .contact-wrapper {
                display: flex;
                flex-direction: column-reverse;    
                margin-left:0px;    
              }
          }
          IoIosSend{
              font-size:30px;
          }
          .contact-wrapper {
              margin-bottom:70px;
          }
          .form{
            animation: slideIn 2s;
          }
          @keyframes slideIn{
            from{
                opacity:0;
                transform:rotateX(-90deg);
            }
            to{
                opacity:1;
                transfor:rotateX(0);
            }
          }
          @keyframes slide {
            0%   { transform: translate(-300px,0px); }
            100% { transform: translate(0px,0px); }
          }
          #contact{
            animation: slide 2s;
          }
  
            `}</style>
      </div>


     
    );
}
export default Form;