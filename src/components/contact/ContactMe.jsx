import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import '/src/components/contact/ContactMe.css'

export default function ContactMe(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5636duc', 'template_zd4dbng', form.current, 'jfjp2GZXEJAnSymnl')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      })
  }

  return (
      <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label className="off-screen" htmlFor="user_name">Name</label>
                    <input type="text" name="user_name" placeholder="Name" required />
                    <label className="off-screen" htmlFor="user_email">Email</label>
                    <input type="email" name="user_email" placeholder="Email" required />
                </div>
                <div>
                    <label className="off-screen" htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Your message" required />
                </div>
                <input className="btn" type="submit" value="Send" />
            </form>
    </section>
  )
}

//     return (
//         <div id="contacts" className="contacts">
//             <h2>Contacts</h2>
//         </div>
//     )
// }
  