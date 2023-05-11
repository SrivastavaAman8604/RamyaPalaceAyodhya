import React from 'react'
import Helmet from 'react-helmet';
import ContactUs from './ContactUs';
// import axios from 'axios';
// import emailjs from '@emailjs/browser';


const Contact = () => {

//    const [userName, createUser] = useState('')
//   const onSubmit = async (e) => {
//     e.preventDefault()
//     const post = { userName: userName }
//     try {
//       const res = await axios.post('http://localhost:3001/users', post)
//       console.log(res.data)
//     } catch (e) {
//       alert(e)
//     }
//   }

   // const[name,setName]=useState("");
   // const[email,setEmail]=useState("");
   // const[phone,setPhone]=useState("");
   // const[message,setMessage]=useState("");
   // const form = useRef();

   // const sendEmail = (e) => {
   //    e.preventDefault();
   //        try {
   //            emailjs.sendForm('service_smjpmre', 'template_rired5p', form.current, 'TWOC87q98bmLmrTRC')
   //        .then((result) => {
   //            console.log(result.text);
   //            console.log("message sent")
   //            setName("");
   //            setEmail("");
   //            setPhone("");
   //            setMessage("");
              
   //        }, (error) => {
   //            console.log(error.text);
   //            console.log(error);
   //        });
   //        } catch (error) {
   //            console.log(error);
   //        }
   //    };

  return (
    <>
      <Helmet>
         <title>Contact Hotel Ramay Palace - Near Ram Janmbhoomi Ayodhya</title>
         <link rel="canonical" href="https://ramaypalace.com/contact" />
         <meta name='description' content='Contact Hotel Ramay Palace for visiting Ram Janmbhoomi Ayodhya and having an accommodation close to religious places in Ayodhya'/>
      </Helmet>
    <main className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
         </div>
      </main>
      <div className="contact animated fadeInUp">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  {/* <div className="response-message"></div>
                  <form id="contactUsForm" className="main_form" >
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" id="name"  placeholder="Name" type="text" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" id="email" placeholder="Email" type="email" name="Email"/>
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" id="phone" placeholder="Phone Number" type="number" name="Phone Number"/>                         
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" id="message" placeholder="Message" type="text" name="Message"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn contact-us-submit" type='button'>Send</button>
                        </div>
                     </div>
                  </form> */}
                  
                  <ContactUs/>
               </div>
               <div className="col-md-6">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.600538754083!2d82.17856816620748!3d26.78981201974049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681909363153!5m2!1sen!2sin" title='Your Location' width="600" height="400" frameborder="0" style={{border:0, width: "100%"}}></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Contact
