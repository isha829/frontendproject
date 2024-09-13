import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e58a9d6-2bb3-4625-81c6-de2fcdb0766f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());
     
    if (res.success) {
      console.log("success",res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
};
  return (
    <div className='Contact' >
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Ready to get started? Reach out to us for personalized assistance.
        "Don't hesitate to contact us with any inquiries.Connect with us today by sending a message.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev </li>
            <li><img src={phone_icon} alt="" />+1-012-345-678-90 </li>
            <li><img src={location_icon} alt="" />Carrera 7 # 45-67, Bogotá, Colombia</li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name' placeholder='Enter your name'
             required/>
             <label>Phone Number</label>
             <input type="tel" name='phone' placeholder='Enter your phone number'
             required/>
             <label> Message</label>
             <textarea name="Message"rows="6" placeholder='Enter your message'
             required></textarea>
             <button type="submit" className='btn dark-btn'>Submit Now
             <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact
