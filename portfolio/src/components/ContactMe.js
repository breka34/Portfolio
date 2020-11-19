import React from 'react';
import Success from './Success';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
const ContactMe = () => {
    return (
        
        <div className="contact-wrapper">
            <div className="contact-text">
            <div className="contact-img">
            <img src="siroki.jpg"   />
            </div>
            <div className="label">
            <Typewriter className="type"
               onInit={(typewriter) => {
                  typewriter.typeString('Grad: Široki Brijeg(BiH)')
                  .pauseFor(300)
                  .deleteAll()
                  .typeString('Ulica: Kraljice Katarine')
                  .pauseFor(300)
                  .deleteAll()
                  .typeString('Broj tel: 063-9*5-6**')
                  .pauseFor(300)
                  .deleteAll()
                  .start()
                  
               }} 
              
            />
            </div>
            
            </div>
            <footer>
                <span>Hvala što ste posjetili moju stranicu 2020</span>
            </footer>
        </div>
        
    )
}

export default ContactMe
