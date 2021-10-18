import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import {icons} from '../../data/icons'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoPerson } from "react-icons/go";

const Main=()=>{
    
    return (
        <div className="links container-fluid ">
          <div className="row">
          <div className="col-lg-5 intro">
            <h2><span className="tag">Codess</span>.Cafe</h2>
            <p><i>Pro-bono mentorship by Aarnav Jindal for collegiate women in tech, helping them unlock their true potential.</i></p>
            <hr/>
          </div>
            <div className="col-lg-7 socials">
            
              <ul className="social-media-list">
                
                {
                  icons.map((icon)=>{
                    <div className="top text-center" style={{display:"block"}}>
                    {(icon.id==1?<p>CONTACT</p >:(icon.id==2?<p>MEDIA</p>:""))}
                    </div>
                    return (
                      <div>
                        
                      <a href={icon.link} target="_blank" className="contact-icon" key={icon.id}>
                      <div className="row"> 
                      <div className="col-xxl-6 icons">
                      <li >
                     
                       

                      {(icon.id==3 || icon.id==4?<FaLinkedinIn/>:(icon.id==2?<SiGmail/>:(icon.id==1?<GoPerson/>:"")))}
                     
                      
                    </li>
                    </div>
                    <div className="col-xxl-6 desc">
                     <p>{icon.text}</p>
                     </div>
                     </div>
                     </a>
                     </div>
                    )
                  })
                }
              
           
              </ul>
              
            </div>
           
        </div>
            <style>{`
.links{
  background-color:#1E90FF;
  box-shadow: 0 50vh 0 50vh #1E90FF;
  margin-bottom:3%;
}
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display:grid;
  grid-template-columns:auto auto;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 200px;
  margin: 40px 20px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}
.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}
a:link{
  text-decoration:none;
}
.social-media-list li {
  height: 60px;
  width: 60px;
  line-height: 60px;
}
.social-media-list li:after {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
p{
  margin-bottom:20px;
  display:inline;
  color:white;
  font-weight:600;
}
.desc{
  text-align:center;
}
.social{
  margin-left:27%;
}
@media (max-width:990px){
  .social{
    margin-left:0%;
  }
}
li:hover{
  color:black;
}
a:visited{
  color:white;
}
.top p{

  font-size:40px;
}
@media(min-width:1400px){
  .top p{
    text-align:left;
  }
  .desc{
    padding-top:40px;
  }
}
.intro{
  padding-top:10px;
  color:white;
}
h2{
  
  font-size:60px;
  margin-bottom:10%;
}
.intro p{
  font-size:30px;
  color:#cce6ff;
  
}
.intro{
  animation: slide 2s;
}
.intro hr{
  display: none;
}
.socials{
  animation: slideleft 2s;
}
@keyframes slide {
  0%   { transform: translate(-300px,0px); }
  100% { transform: translate(0px,0px); }
}
@keyframes slideleft {
  0%   { transform: translate(300px,0px); }
  100% { transform: translate(0px,0px); }
}
@media(max-width:975px){
  .intro hr{
    display: block;
  }
}


                
            `}</style>
        </div>
    )
}
export default Main;