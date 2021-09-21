import React from 'react'

function TestimonialCards({ data }) {
    return (

        <div className="testimonial-container" >
            <div className="r">
                <div style={{ display: 'flex' }} >
                 <img className="codess-image" src={data.image} />
                    <div className="namecollege">
                        <span className="codess-name">{data.name}</span>
                        <span className="edu">{data.college}</span>
                    </div>
                </div>
                <img className="tagname" src="https://codess.cafe/images/tag.png" />
            </div>
            <div className="review">
                {data.description}
            </div>
            <div className="company">
                Placed at
                <img className="codess-company" src={data.company_image} />
            </div>
            <style jsx>{`
                .codess-company{
                    margin-left:2rem;
                    width:2rem;
                }
                .namecollege{
                    display:flex;
                flex-direction: column;
                }
              .r{
                display:flex;
                justify-content: space-between;
               }
            .codess-name {
                font-size: 16px;
                margin-left: 10px;
                font-weight: bold;
            }
                .codess-image{
                    height:3rem;
                    border-radius: 50%;
                }
                .review {
                    margin-top: 30px;
                    height: 157px;
                    font-size: 13px;
                    overflow: scroll;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    transition: 0.3s ease-in-out;
                    margin-bottom:1rem;
                }
                .edu{
                    font-style: italic;
                    color: #000099;
                    font-size: 18px;
                }
                .review:hover{
                    overflow-y:scroll;
                }
                .testimonial-container{    
                    border: 1px solid #AFEEEE;
                    text-align: center;
                    margin-bottom:30px;
                    width:23rem;
                    border-radius: 15px;
                    height: 350px;
                    padding: 2rem;
                
                }
                .tagname{
                    height: 25px;
                    float: right;
                }
                .position{
                    color:#1E90FF;
                }
                
                @media(max-width:600px){
                    .mentor-container{
                    border: 1px solid #AFEEEE;
                    text-align: center;
                    margin-bottom: 30px;
                    width: 88%;
                    border-radius: 15px;
                    height: 350px;
                    padding: 2rem;
                    }
                }
        `}</style>
        </div>

    )
}

export default TestimonialCards
