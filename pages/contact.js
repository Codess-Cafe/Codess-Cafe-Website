import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../components/contact/contactHeading'
import Main from '../components/contact/main'


const Contact=()=>{
    return (
        <div>
            <Heading/>
            <footer>
        Made with ❤️ by Codess Cafe community.
      </footer>
            
            <style jsx>{`
            div{
              text-align:center;
            }
            footer {
              background-color:white;
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }
      
              footer img {
                margin-left: 0.5rem;
              }
      
              footer a {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              footer{
                box-shadow: 0 50vh 0 50vh white;
              }
            `}</style>
        </div>
    )
}
export default Contact
