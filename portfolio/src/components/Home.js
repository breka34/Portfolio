import React from 'react'
import Map from './map';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        // <div className="relative">
        <div className="home-wrapper">
        <div className="map">
        <Map/>
        </div>
        <div className="img-wrapper">
            <img src="programmingslika.jpeg" />
        </div>  
        <div className="name"> 
        <h1>Luka Brekalo</h1>     
        <span>Fronted Developer/Basketball Referee</span>
        </div>
        <div className="icons">
        <a href="https://www.facebook.com/luka.brekalo" target="blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/" target="blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://github.com/breka34"><i class="fa fa-github" target="blank" aria-hidden="true"></i></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
        </div>
        <div className="scroll">
        <Link to="/Education"><i class="fa fa-chevron-down" aria-hidden="true"></i></Link>
        <span>Education</span>
        </div>
        </div>
        // </div>
    )
}

export default Home
