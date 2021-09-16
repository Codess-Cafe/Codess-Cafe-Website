
import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Card from '../components/card'
import Navbar from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const Mentor=()=> {
    const mentors = require("../data/mentors.json");
    const [category, setCategory] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    const filtered = mentors.filter(function(result){
        if(category === ""){
            return true;
        }else{
            return result.category.toLowerCase() === category.toLowerCase();
        }
        
    })

return (
    <div>
        <Navbar loc="mentors"/>
        <div className="main">
           <h1 className="text-center">Mentors</h1>
           
            
           <div id = "bb"></div>
           <div className="filterDiv">
                <select
                    className="selectpicker"
                    onChange={handleCategoryChange}
                >
                    <option value="">Select a category</option>
                    <option value="Competitive Programming">Competitive Programming</option>
                    <option value="Open source">Open-Source</option>
                    <option value="Technical interview Preparation">Technical interview Preparation</option>
                    <option value="Core subject Preparation">Core subject Preparation</option>
                    <option value="DSA Preparation">DSA Preparation</option>
                    <option value="Resume Reviews">Resume Reviews</option>
                </select>
            </div>
            <div className="top-img">
                <Image 
                    src="/undraw_Dev_focus_re_6iwt.png"
                    height={400}
                    width={650}
                    alt="Women-logo"
                />
            </div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
            
                <div className="mentor-grid">
                    {filtered.map(mentor=> (
                        <Card key={mentor.name} mentor={mentor}/>
                    ))}
                </div>
        </div>
        <style jsx>{`
        .main{
            margin-top:100px;
            animation: slideIn 2s;
        }
        .mentors{
            color:"white"
        }
           h1{
           
               margin-bottom:0px;
               margin-block-start: 0;
                margin-block-end: 0;
                font-size:40px;
           }
           .mentor-grid{
               padding:50px;
               margin-bottom:7%;
               display: grid;
	grid-template-columns: 30% 30% 30%;
	grid-gap: 1% 5%;
    animation: slide 3s;
           }
           #bb{
               border-bottom:7px solid #1E90FF;
               width: 90px;
             margin-left:47%;
               
           }
           .top-img{
               text-align:center;
           }
           .spinner {
               margin: 10px auto 0;
               width: 130px;
               text-align: center;
             }
             
             .spinner > div {
               width: 28px;
               height: 28px;
               background-color: #1E90FF;
             
               border-radius: 100%;
               display: inline-block;
               -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
               animation: sk-bouncedelay 1.4s infinite ease-in-out both;
             }
             
             .spinner .bounce1 {
               -webkit-animation-delay: -0.32s;
               animation-delay: -0.32s;
               margin-right:15px;
             }
             
             .spinner .bounce2 {
               -webkit-animation-delay: -0.16s;
               animation-delay: -0.16s;
               margin-right:15px;

             }
             
             @-webkit-keyframes sk-bouncedelay {
               0%, 80%, 100% { -webkit-transform: scale(0) }
               40% { -webkit-transform: scale(1.0) }
             }
             
             @keyframes sk-bouncedelay {
               0%, 80%, 100% { 
                 -webkit-transform: scale(0);
                 transform: scale(0);
               } 40% { 
                 -webkit-transform: scale(1.0);
                 transform: scale(1.0);
               }
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
              @media(max-width:800px){
                .mentor-grid{
                    padding:50px;
                    margin-bottom:7%;
                    display: grid;
                    grid-template-columns: 45% 45%;
                    grid-gap: 1% 5%;
                    animation: slide 3s;
                }
              }
              @media(max-width:600px){
                .mentor-grid{
                    padding:50px;
                    margin-bottom:7%;
                    display: grid;
                    grid-template-columns: 90%;
                    animation: slide 3s;
                }
              }
              .filterDiv{
                text-align: right;
                font-size: 1.2em;
                margin-right: 2em;
              }
             .selectpicker{
                padding: 5px;
                border-radius: 3px;
                border: none;
                background-color: rgb(151 148 148 / 15%);
             }
             option:hover{
                 background-color:red;
             }
       `}</style>
    </div>
)}

export default Mentor;