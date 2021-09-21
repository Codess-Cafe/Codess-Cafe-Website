import React from "react";
import Navbar from '../components/nav'
import TestimonialCards from "../components/TestimonialCards";
import 'bootstrap/dist/css/bootstrap.min.css';

const about = () => {
  const testimonials = require('../data/testimonials.json')
  return (
    <div>
    <Navbar/>
   <div className="main">
   <h1 className="text-center">Testimonials</h1>
   <div id = "blue_border"></div>
    <div id="testimonials">

      {
        testimonials.map((item) =>
        (
          <TestimonialCards data={item} />
        ))
      }
      </div>
      </div>
      <style jsx>{`
      .main{
        margin-top:100px;
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
      #testimonials{
        padding: 50px;
        margin-bottom: 16%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 1% 5%;
        -webkit-animation: slide-jsx-2046397175 3s;
        animation: slide-jsx-2046397175 3s;
      }
      .text-center{
        margin-bottom: 0px;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 40px;
      }  
    }
    #blue_border {
      border-bottom:7px solid #1E90FF;
      width: 90px;
      margin-left:47%;           
  }
    @media(max-width:600px){
     
    #testimonials{
     margin-bottom: 16%;
     padding:1rem;
    grid-template-columns: 100%;
    grid-gap: 1%;
    -webkit-animation: slide-jsx-2046397175 3s;
    -webkit-animation: slide-jsx-2046397175-jsx-2745759487 3s;
    animation: slide-jsx-2046397175-jsx-2745759487 3s;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
  }
  
    `
      }
       </style>
    
    </div>
  );
}

export default about;