import React, { Component } from "react";
import { Link } from "react-scroll";


export default class Navigation extends Component {
  render() {
    return (
      <div
               style={{
          position: "fixed",

          width: "100%",
          margin: "0",
          padding: "0"
        }}
        
      >
        <span 
          className="fa fa-magic"
          onClick={this.props.func}
          style={{
            color: this.props.color,
            fontSize: "24px",
            padding: "5px",
            float: "right",
            marginRight: "0"
          }}
        />
         
        <nav>
       
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <a
              style={{
                color: this.props.color,
                marginleft: "5px",
                padding: "5px",
                textDecorationColor: this.props.color
              }}
            >
              About
            </a>
          </Link>

          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <a
              style={{
                color: this.props.color,
                marginRight: "5px",
                padding: "5px",

                textDecorationColor: this.props.color
              }}
            >
              Skill
            </a>
          </Link>
        </nav>
      </div>
    );
  }
}
