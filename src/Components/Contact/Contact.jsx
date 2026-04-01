
import Arrow from "../../assets/HeaderImages/right-arrow.png"
import emailjs from "emailjs-com";
import "./Contact.css"


export default function Contact() {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a215meq" ,
      "template_6toncxg",
      e.target,
      "TPcv2vl9fR6OBv-kz"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      () => {
        alert("Failed to send message.");
      }
    );

    e.target.reset();
  };


    return(
        <div className="contacts" id="contacts">
            <div className="contacts-left">
                <p className="left-top"><span className="left-top-slash">//</span>GET IN TOUCH</p>

                <h1 className="contacts-left-h1">Ready To Work On Your</h1>
                <h1 className="contacts-left-h1-bottom">Website?</h1>

                <p className="left-description">
                    Provide as many details as possible, and expect a response within 24 hours.
                </p>

                <div className="email-contacts">
                    {/* <img src="#" alt="" /> */}
                    <div className="email-contact">
                        <p>EMAIL</p>
                        <p className="email">aladohdaniel@gmal.com</p>
                    </div>
                </div>
            </div>

            <div className="contacts-right">
                <form className="contact" onSubmit={sendEmail}>
                    <p className="contact-title">What can I help you with?</p>
                    <div className="my-service">
                        <p>WEB DESIGN</p>
                        <p>WEB DEVELOPMENT</p>
                        <p>GRAPHIC DESIGN</p>
                        <p>OTHER</p>
                    </div>
                    <div className="details">
                        <div className="detail">
                            <label htmlFor="first-name">FIRST NAME</label>
                            <input type="text" name="first_name" placeholder="John" required/>
                        </div>
                        <div className="detail">
                            <label htmlFor="second-name">SECOND NAME</label>
                            <input type="text" name="second_name" placeholder="Doe" required/>
                        </div>
                    </div>

                    <div className="details">
                        <div className="detail">
                            <label htmlFor="phone-number">PHONE NUMBER</label>
                            <input type="number" name="user_number" placeholder="(+233)12 345 6789" required/>
                        </div>
                        <div className="detail">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" name="user_email" placeholder="john@example.com" required/>
                        </div>
                    </div>

                    <div className="message">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" id="message" placeholder="Tell me about your project...." required></textarea>
                    </div>

                    <button className="submit">
                        <p>SUBMIT</p>
                        <img src={Arrow} alt="" />
                    </button>


                </form>
            </div>
        </div>
    )
}