import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import mydata from "../data.json";
import ArrowIcon from "../components/ArrowIcon";
import { Link, Element } from "react-scroll";
import SocialMediaIcons from "react-social-media-icons";
import './Titlesection.css';

class TitlesSection extends Component {
  constructor() {
    super();
    this.state = {
      color: "rgb(0, 0, 247)"
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    this.setState({
      color: this.state.color === "rgb(0, 0, 247)" ? "rgb(73, 224, 247)" : "rgb(0, 0, 247)"
    });
  };

  render() {
    return (
      <div
        style={{ color: this.props.color, backgroundColor: this.props.bgcolor }}
      >
     
        <Element name="title" className="element" />
        <Fullpage className="first">
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={this.changeColor}
            onMouseLeave={() => {
              this.changeColor();
                          }}
          >
            {mydata.title}
          </h1>
          <div>
            <h2>{mydata.subtitle}</h2>
          </div>
          
          <div>
                    <SocialMediaIcons
                      icons={mydata.socialIcon}
                      iconSize={"2.8em"}
                      iconColor={this.props.color}
                      classNamePrefix={'icon'}
                     
                    />
                  </div>

          {/* <div className="icons-wrapper">
            {Object.keys(mydata.links).map(keyicon => {
              return (
                <div> */}
                  {/* <div className="icon">
                    <SocialIcon
                      color={this.props.color}
                      url={mydata.links[keyicon]}
                    />
                  </div> */}
                  
                {/* </div>
              );
            })}
          </div> */}
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
          <ArrowIcon
            icon="fa fa-sort-down"
            onClick={() => {
              console.log("aaaa");
            }}
          />
        </Link>
        <Element name="about" className="element" />
       
       
      </div>
    );
  }
}
export default TitlesSection;
