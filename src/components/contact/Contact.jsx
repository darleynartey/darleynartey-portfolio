import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <p className="section_subtitle">Contact Me</p>

        <div className="contact_container container grid">
            <div className="contact_content">
                <form className="contact_form">
                    <div className="contact_form-div">
                       <label className="contact_form-tag">Email</label>
                       <input type="text" name="name" className='contact_form-input' placeholder='Type your name'/>
                    </div>

                    <div className="contact_form-div">
                       <label className="contact_form-tag">Name</label>
                       <input type="email" name="email" className='contact_form-input' placeholder='Type your email address'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                       <label className="contact_form-tag">Message</label>
                       <textarea name="message" cols="30" rows="10" className='contact_form-input' placeholder='Type your message' />
                    </div>
                    <button className="button button--flex">Send</button>
                </form>


            </div>

            
        </div>
    </section>
  )
}

export default Contact