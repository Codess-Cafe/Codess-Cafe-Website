import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {icons} from '../../data/icons'
const Main=()=>{
    
    return (
        <div className="body">
            
           <ul className="ul">          
                      { icons.map(icon => {
                                return( 
                                <li key={icon.id}>
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

                h1{
                    color:white;
                }
      
                
                .ul {
                 
                  display: grid;
                  grid-template-columns: 10% 10%;
                    grid-gap: 50% 100px;
                    animation: slide 3s;
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
             
                
            `}</style>
        </div>
    )
}
export default Main;