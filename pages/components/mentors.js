import React, { useState } from 'react';

import {
    Row,
    Col,
    textCenter,
    spaceBetween,
    spaceAround
  } from 'reactstrap';
  
import Mentor from './mentor';
import Image from 'next/image'

const mentors = () => {
    return (
      <div>
           <h1 className="text-center">Mentors</h1>
           <div id = "bb"></div>
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
                   <div className="row space-between">
                       <div className="col-4">
                            <Mentor name="Aarnav Jindal"
                            image="https://codess.cafe/images/mentor/14.jpg"
                            position="SDE"
                            company="Cure.Fit"
                            education="Founder, Codess.Cafe"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Aditi Aggrawal"
                            image="https://codess.cafe/images/mentor/8.jpg"
                            position="SDE intern"
                            company="Goldman Sachs"
                            education="IT, Delhi Technological University"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Aeshna Jain"
                            image="https://codess.cafe/images/mentor/6.jpg"
                            position="SDE intern"
                            company="Microsoft"
                            education="IT, Indira Gandi Delhi Technological University for Women"/>
                        </div>
                    </div>
                    <div className="row space-between">
                       <div className="col-4">
                            <Mentor name="Aiman Siddiqua"
                            image="https://codess.cafe/images/mentor/0.jpg"
                            position="SDE Intern"
                            company="Amazon"
                            education="MCE, Delhi Technological University"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Akanksha Tanwar"
                            image="https://codess.cafe/images/mentor/2.jpg"
                            position="SDE intern"
                            company="Microsoft"
                            education="IT, Delhi Technological University"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Chitra Singla"
                            image="https://codess.cafe/images/mentor/1.jpg"
                            position="SDE intern"
                            company="Amazon"
                            education="CSE, Delhi Technological University"/>
                        </div>
                    </div>
                    <div className="row space-between">
                       <div className="col-4">
                            <Mentor name="Deepti Aggarwal"
                            image="https://codess.cafe/images/mentor/9.jpg"
                            position="SDE"
                            company="Microsoft"
                            education="CSE, Delhi Technological University"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Joshika"
                            image="https://codess.cafe/images/mentor/4.jpg"
                            position="SDE"
                            company="Morgan Stanley"
                            education="CSE, Indian Institute Of Technology, Patna"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Kirti Dabas"
                            image="https://codess.cafe/images/mentor/10.jpg"
                            position="SDE Intern"
                            company="Google"
                            education="CSE, Delhi Technological University"/>
                        </div>
                    </div>
                    
                    <div className="row space-between">
                       <div className="col-4">
                            <Mentor name="Krati Garg"
                            image="https://codess.cafe/images/mentor/7.jpg"
                            position="SDE Intern"
                            company="Google"
                            education="CSE, Delhi Technological University"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Ojasvi Tyagi"
                            image="https://codess.cafe/images/mentor/11.jpg"
                            position="SDE intern"
                            company="Uber"
                            education="CSE, Indira Gandhi Delhi Technological University for Women"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Prachi Singhal"
                            image="https://codess.cafe/images/mentor/3.jpg"
                            position="SDE intern"
                            company="VMWare"
                            education="CSE, Mody University"/>
                        </div>
                    </div>
                    <div className="row space-between">
                       <div className="col-4">
                            <Mentor name="Radhika Patwari"
                            image="https://codess.cafe/images/mentor/12.jpg"
                            position="SDE Intern"
                            company="Google"
                            education="CSE, Indian Institute Of technology, Khadagpur"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Sangeeta Mishra"
                            image="https://codess.cafe/images/mentor/13.jpg"
                            position="SDE Intern"
                            company="Google"
                            education="Chemical, Indian Institute Of Technology-BHU"/>
                        </div>
                        <div className="col-4">
                            <Mentor name="Sanskriti Singhal"
                            image="https://codess.cafe/images/mentor/5.jpg"
                            position="SDE Intern"
                            company="Google"
                            education="SE, Delhi Technological University"/>
                        </div>
                    </div>
                    
                </div>
        <style jsx>{`
           
            .mentor-grid{
                padding:50px;
                margin-bottom:30px;
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
        `}</style>
    </div>
    );
  }
   
  export default mentors;