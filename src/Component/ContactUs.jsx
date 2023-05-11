import React from 'react'
// import toast, { Toaster } from 'react-hot-toast'

// const notify = () => toast('Mail not sent')

const ContactUs = () => {
  return (
    <div>
        <div className="response-message"></div>
        {/* <div><Toaster/></div> */}
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
                        <button className="send_btn contact-us-submit"  type='button'>Send</button>
                        </div>
                    </div>
                </form>
    </div>
  )
}

export default ContactUs
