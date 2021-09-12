import React, { useState } from 'react';
import Navbar from './nav'
const mentor=({mentor})=> {

    return (
        <div className="mentor-container">
          <h4>{mentor.name}</h4>
          <img src={mentor.image}/>
          <p className="position"><b>{mentor.position}: {mentor.company}</b></p>
          <p className="edu">{mentor.education}</p>
          <style jsx>{`
              img{
                 
                  height:100px;
                  border-right:8px #1E90FF solid;
                  border-top: 5px #1E90FF solid ;
                  border-radius: 50%;
              }
              .mentor-container{
                  padding:20px;
                  border: 1px solid #AFEEEE;
                  text-align: center;
                  margin-bottom:30px;
                  border-radius: 25px;
              }
              .mentor-container:hover{
                  border: 3px solid #1E90FF;
              }
              .position{
                  color:#1E90FF;
              }
              .edu{
                  font-style: italic;
                  color:#000099;
              }
          `}</style>
      </div>
      );
                     
    }

    export default mentor;