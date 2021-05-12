import React from 'react';
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
                  .pauseFor(800)
                  .deleteAll()
                  .typeString('Ulica: Kraljica Katarina')
                  .pauseFor(800)
                  .deleteAll()
                  .typeString('Broj tel: 063-9*5-6**')
                  .pauseFor(800)
                  .deleteAll()
                  .typeString('Datum rođenja: 23/06/1995')
                  .pauseFor(800)
                  .deleteAll()
                  .start()
                  
               }} 
              
            />
            </div>
            </div>
          
        </div>
        
    )
}

export default ContactMe
