import React from 'react';
import './styles.css';
import { MDBContainer, MDBIframe } from 'mdbreact'

const Contact = () => {
    return (
        <div className="Contact">
            <div className="wrap-contact">

                <h3>Contact Details</h3>
                <span>Call us at:</span>
                <p>07962 033837 (Mon.-Fri. 8:30-16:30 CET)</p>
                <span>Visit us at:</span>
                <p>5 Victoria Rd,<br /> Kensington,<br /> London W8 5AG</p>
                <span>Email us at:</span>
                <p>nerdygirls@yahoo.com</p>
                <p>National Business Registry Number (REGON):068905242</p>
            </div>

            <MDBContainer className="map">
                <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6657814420673!2d-0.18779358469189164!3d51.50100041899278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760558efee6e2d%3A0xa3074098fc1c1aab!2zNSBWaWN0b3JpYSBSZCwgS2Vuc2luZ3RvbiwgTG9uZG9uIFc4IDVBRywg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sbg!2sbg!4v1592666471934!5m2!1sbg!2sbg"
                    frameborder="0"></MDBIframe></MDBContainer>
        </div>
    );
}

export default Contact;


