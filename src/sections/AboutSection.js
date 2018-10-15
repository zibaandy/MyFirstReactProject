import React, { Component } from "react";
// import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import mydata from "../data.json";
import "./AboutSection.css";
import ArrowIcon from "../components/ArrowIcon";
import {Link, Element } from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div
        style={{ color: this.props.color, backgroundColor: this.props.bgcolor }}
      >
        <Fullpage className="second">
          <h3>{mydata.sections[0].title}</h3>
          <div className="paragraph">
            {mydata.sections[0].items.map(p => {
              return[<p style={{marginLeft:'5%'}}>{p.content1} </p>,<br></br>,<p>{p.content2} </p>,<br></br>];
            })}
          </div>
        </Fullpage>
        
      
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
        <ArrowIcon
          icon='fa fa-sort-down'
          onClick={() => {
            console.log("aaaa");
          }}
        />
       </Link>
        <Element name="skill" className="element" />

        
      </div>
    );
  }
}
export default AboutSection;
