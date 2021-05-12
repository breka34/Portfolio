import React from 'react'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className="projects-wrapper">
            <div className="projects">
                <div className="project" id="pro1">
                    <div className="img">
                    <img src="CounterGift.gif"  />
                    </div>
                    <div className="project-text">
                   <span>Jednostavna counter aplikacija napravljena korištenjem react hooks-a</span> 
                   <a href="https://github.com/breka34/Counter-react" target="blank">Source code</a>
                    </div>
                </div>
                <div className="project" id="pro2">
                    <div className="img">
                        <img src="quiz.jpg" />
                    </div>
                    <div className="project-text">
                        <span>Quiz aplikacija.</span>
                        <a href="https://github.com/breka34/Quiz" target="blank">Source code</a>
                    </div>
                </div>
                <div className="project" id="pro3">
                    <div className="img">
                        <img src="shops.jfif" />
                    </div>
                    <div className="project-text">
                        <span>Online shop za muškarce i žene.</span>
                        <a href="https://github.com/breka34/E-commerce" target="blank">Source code</a>
                    </div>
                </div>
                <div className="project" id="pro4">
                    <div className="img">
                    <img src="form.jpg" />
                    </div>
                    <div className="project-text">
                        <span>Form/Movies aplikacija. Prvi korak unijeti svoje podatke nakon toga pronaći film koji želite</span>
                        <a href="https://github.com/breka34/Form-Movies" target="blank">Source code</a>
                    </div>
                </div>
                <div className="project" id="pro4">
                    <div className="img">
                    <img src="fake-shop.jpg" />
                    </div>
                    <div className="project-text">
                        <span>React-Redux</span>
                        <a href="https://github.com/breka34/Fake-Shop" target="blank">Source code</a>
                    </div>
                </div>
                <div className="project" id="pro4">
                    <div className="img">
                    <img src="breaking-bad.jpg" />
                    </div>
                    <div className="project-text">
                        <span>Breaking Bad Api/Search actor</span>
                        <a href="https://github.com/breka34/Task-Tracker-BreakingBad-Api" target="blank">Source code</a>
                    </div>
                </div>
                <div className="scroll">
            <Link to="/ContactMe"><i class="fa fa-chevron-down" aria-hidden="true"></i></Link>
            </div>
            </div>
            </div>
        
    )
}

export default Projects
