import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./About.css";
import Mypic from "../../img/IMG20211106175134.jpg";


const About = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    console.log(Mypic);

    return (
        <div className="main_div">
            <div className="left_content_text">
            <h2>About Me 😎</h2>
            <img className="my_img" src={Mypic} alt={Mypic} />
            <h1 className="title_text">I am a <span className="bold_text">front end developer</span> who cares about the code and the people.
                </h1>
           </div>

            <div className="right_content">
            <h4 className="short_title">My specialization :</h4>
                <div className="description"> Hi Im Arif Almas im a front en developer and designer -  </div>
                <ul>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Web Design </li>
                    <li>UI/UX Design</li>
                    <li>Front End Development</li>
                </ul>
            </div>
        </div>

    );

};
export default About;