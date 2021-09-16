
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
const Heading=()=>{
   
    return (
        <div className="heading">
            <Navbar location="contact"/>
            <div className="row">
                <h1 id="heading">CONTACT US!</h1>
            <div className="col-lg-4">
            <Image 
                    src="/undraw_social_tree_1_y9wa.png"
                    height={600}
                    width={500}
                    alt="social-logo"
                    className="side-img"
                   
                    
                />
                <h3>Coddess.Cafe</h3>
                <p><i><b>Pro-bono mentorship by Aarnav Jindal for collegiate women in tech, helping them unlock their true potential.</b></i></p>
            </div>
            <div className="col-lg-8">
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/undraw_Social_networking_re_i1ex.png"
            alt="Image One"
           
          />
          <Carousel.Caption>
            <h1>GET IN TOUCH</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
        src="/undraw_Social_media_re_w12q.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h1>Know More About us!</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
            <style jsx>{`
            @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
            .carousel-control-next-icon {
                background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e);
                color:#1E90FF;
            }
            #heading{
                color:black;
            }
            img{
                opacity:0.7;
            }
               h1{
                   color:#0059b3;
                   font-size:50px;
                   font-family: 'Ubuntu', sans-serif;
                    font-weight: 800;
               }
               .row{
              
                  
                   margin-top:100px;
                   margin-left:5%;
                   text-align:center;
                   
               }
               @media(max-width:700px){
                 .row{
                   margin-left:10%;
                 }
                
               }
               h3{
                font-family: 'Ubuntu', sans-serif;
                font-size: 2.5rem;
                font-style: italic;
                color:#1E90FF;
               }
               p{
                color:#0059b3;
               }
               .heading{
                 text-align:center;
               }
            `}</style>
        </div>
    );
}
export default Heading;