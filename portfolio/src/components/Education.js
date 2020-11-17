import React from 'react'
import { Link } from 'react-router-dom';
const Education = () => {
    return (
        <div className="education-wrapper">
            <div className="education-cards">
            <h2>Education</h2>
                       <div className="card">
                       
                       <h3>Obrazovanje</h3> 
                       <p>- Gimnazija fra Dominika Mandića(Široki Brijeg)</p>
                       <p>- Inženjer Informacijskih tehnologija (Mostar) 180ECTS</p> 
                       <p>- Završen tečaj HTML/CSS na kulturnom centru Kralja Fahda (Mostar) </p>
                       <p>- Završen tečaj HTML/CSS/JAVASCRIPT na Spark-Schoolu (Mostar)</p>
                       </div>
                       <div className="card">
                           <h3>Košarkaški sudac</h3>
                           <p>- Profesionalni košarkaški sudac od 2014. godine</p>
                           <p>- Od 2016. godine sudac Premijer lige BiH</p>
                           <p>- 2018. godine pohađao seminar za Fiba međunarodnog suca </p>
                       </div>
                       <div className="card">
                           <h3>Studentski poslovi</h3>
                           <p>2014. godine mjesec dana u trgovačkom centru Mepas</p>
                           <p>2015. godine 10 mjeseci na raznim poslovima u Fealu </p>
                           <p>Od 2016. godine rad na led reklamama za HKK Široki, KK Zrinjski, RK Izviđač</p>
                       </div>
                       <div className="scroll">
            <Link to="/Projects"><i class="fa fa-chevron-down" aria-hidden="true"></i></Link>
            </div>
            </div>
        </div>
    )
}

export default Education
