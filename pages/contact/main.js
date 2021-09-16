import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {icons} from './icons'
const Main=()=>{
    
    return (
        <div className="body">
            <Image 
                    src="/undraw_Designer_girl_s028-removebg-preview.png"
                    height={350}
                    width={350}
                    alt="social-logo"
                    className="dtop"                  
                />
                
           <ul className="ul">          
                      { icons.map(icon => {
                                return( 
                                <li>
                                  <a href={icon.link}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span><Image 
                                                  src={icon.img}
                                                  height={50}
                                                  width={50}
                                                  alt="social-logo"
                                                  className="side-img"
                                                
                                                  
                                              /></span>
                                          
                                  </a>
                                  
                                </li>);
                      })
                    }
  
</ul>
            <style>{`
                @import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');

                h1{
                    color:white;
                }
                .body {
                  display:flex;
                  align-items: center;
                  justify-content:center;
                  height: 300px;
                  background-color: #1E90FF;
                  margin:0;
                  padding:0;
                }
                
                .ul {
                  position: relative;
                  display: flex;
                  transform: rotate(-25deg) skew(25deg);
                  transform-style: preserve-3d;
                }
                
                .ul li {
                  position: relative;
                  list-style: none;
                  width: 60px;
                  height: 60px;
                  margin: 0 20px;
                }
                
                .ul li::before {
                  content: '';
                  position: absolute;
                  bottom: -10px;
                  left: -5px;
                  width: 100%;
                  height: 10px;
                  background: #2a2a2a;
                  transform: skewX(-41deg);
                }
                
                .ul li::after {
                  content: '';
                  position: absolute;
                  top: 5px;
                  left: -9px;
                  width: 9px;
                  height: 100%;
                  background: #2a2a2a;
                  transform: skewY(-49deg);
                }
                
                .ul li span {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  display: flex !important;
                  background: #2a2a2a;
                  justify-content: center;
                  align-items: center;
                  color: #fff;
                  font-size: 30px !important;
                }
                
                .ul li:hover span {
                  z-index: 1000;
                  transition: .3s;
                  color: #fff;
                  box-shadow: -1px 1px 1px rgba(0, 0, 0, .5);
                }
                
                .ul li:hover span:nth-child(5) {
                  transform: translate(40px, -40px);
                  opacity: 1;
                }
                
                .ul li:hover span:nth-child(4) {
                  transform: translate(30px, -30px);
                  opacity: .8;
                }
                
                .ul li:hover span:nth-child(3) {
                  transform: translate(20px, -20px);
                  opacity: .6;
                }
                
                .ul li:hover span:nth-child(2) {
                  transform: translate(10px, -10px);
                  opacity: .4;
                }
                
                .ul li:hover span:nth-child(1) {
                  transform: translate(0, 0);
                  opacity: .2;
                }
                
                .ul li:nth-child(1):hover span {
                  background: #52e19f;
                }
                
                .ul li:nth-child(2):hover span {
                  background: #2c3456;
                }
                
                .ul li:nth-child(3):hover span {
                  background: #ea6e96;
                }
                
                .ul li:nth-child(4):hover span {
                  background: #fceb00;
                }
                @media(max-width:700px){
                    .dtop{
                        display:none;
                        visibility:hidden;
                    }
                    .body{
                        display:inline-flex;
                    }
                }
                
            `}</style>
        </div>
    )
}
export default Main;