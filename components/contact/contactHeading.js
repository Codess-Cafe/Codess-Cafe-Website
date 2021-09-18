
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Main from './main'
const Heading=()=>{
   
    return (
      <div className="header">
        <Navbar/>
        <h1 id="heading">CONTACT US!</h1>
            <div className="section">
            <Carousel>
              <Carousel.Item>
              
                <div className="tag">
                <h3>Coddess.Cafe</h3>
                </div>
                      <p><i>Pro-bono mentorship by Aarnav Jindal for collegiate women in tech, helping them unlock their true potential.</i></p>
                  
                
               
              </Carousel.Item>
              <Carousel.Item>
                
              <div className="bottom"></div>
                  <h1>Know More About us!</h1>
                  <h1>Get in touch</h1>
                  <div className="bottom"></div>
               
              </Carousel.Item>
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
          h1{
            color:#0066cc;
          }
          #heading{
            color:white;
          }
          .tag{
            background-color:#66b3ff;
            display:inline-block;
            color:white;
            padding:10px;
            border-radius:10px;
            margin-bottom:10px;
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