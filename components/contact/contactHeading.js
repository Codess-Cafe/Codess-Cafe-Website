
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Main from './main'
const Heading=()=>{
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    {
      src: 1,
      content:`    <div className="tag" style="     
      background-color:#66b3ff;
      display:inline-block;
      color:white;
      padding:10px;
      border-radius:10px;
      margin-bottom:10px;">
      <h3>Coddess.Cafe</h3>
      </div>
      <p style=" font-size:30px;
      color:#004080;
      font-weight:500;"><i>Pro-bono mentorship by Aarnav Jindal for collegiate women in tech, helping them unlock their true potential.</i></p>`
    },
    {
      src: 2,
      content:` 
      <div style="height:250px; padding-top:100px">
      <h1 style="color:#0066cc;">Know More About us!</h1>
      <h1 style="color:#0066cc;">Get in touch</h1>
      </div>
      `
    }
  ];
  

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
       <div dangerouslySetInnerHTML={{ __html: item.content }} />
      
      </CarouselItem>
    );
  });

    return (
      <div className="header">
        <Navbar/>
        <h1 id="heading">CONTACT US!</h1>
            <div className="section">
             <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
     
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
        <div className="icons">
          <Main/>
        </div>
        </div>
     
      <footer>
        Made with ❤️ by Codess Cafe community.
      </footer>
      <div className="bottom"></div>
      
      <style jsx>{`
          .header{
            width:100%;
            height:400px;
            background-color:#0077e6;
            padding-left: 20%;
            padding-right: 20%;
            padding-top: 100px;
          
          }
          .bottom{
            height:55px;
          }
          .section{
            background:-moz-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(204, 230, 255, 1) 80%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(204, 230, 255, 1) 80%);

    /* opera 11.10+ */
    background:-o-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(204, 230, 255, 1) 80%);

    /* ie 10+ */
    background:-ms-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(204, 230, 255, 1) 80%);

    /* global 92%+ browsers support */
    background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(204, 230, 255, 1) 80%);
            padding-top:10%;
            background-color:white;
            border: 2px solid #0073e6;
            border-radius:25px;
            margin-left:10%;
            margin-right:10%;
            height:600px;
            padding-left:3%;
            padding-right:3%;
          }
         
          #heading{
            color:white;
          }
         
          p{
            font-size:30px;
            color:#004080;
            font-weight:500;
          }
          .icons{
            margin-left:30%;
         
          }
          @media(max-width:1200px){
            .header{
              padding-left: 10%;
              padding-right: 10%;
             
            
            }
            .bottom{
              margin-bottom:10px;
            }
            .icons{
              margin-left:20%;
            }
          }
          @media(max-width:700px){
            .header{
              padding-left: 0px;
              padding-right: 0px;
            }
            .section{
              height:700px;
            }
            .icons{
              margin-left:20%;
            }
            .bottom{
              margin-bottom:40px;
            }
          }
          @media(max-width:500px){
            .header{
              padding-left: 0px;
              padding-right: 0px;
            }
            .section{
              height:700px;
            }
            .icons{
              margin-left:3%;
            }
            .bottom{
              margin-bottom:90px;
            }
          }

          @media(max-width:300px){
            .header{
              padding-left: 0px;
              padding-right: 0px;
            }
            .section{
              height:700px;
              padding-left:0;
            }
            .icons{
              margin-left:0;
            }
            .bottom{
              margin-bottom:90px;
            }
          }
       
            `}</style>
      </div>


     
    );
}
export default Heading;