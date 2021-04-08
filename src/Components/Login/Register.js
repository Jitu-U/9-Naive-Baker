
import React from "react";
import "./Login.css";
import loginImg from "./login.jpg";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
              {/* <label htmlFor="foodChoice1" class="checkbox_label">   
              <input type="checkbox" name="foodChoice1" class="checkbox_label" value="Vegan" /> Are you a Vegan ?
              </label>
              <label htmlFor="foodChoice2"class="checkbox_label">
              <input type="checkbox" name="foodChoice2" class="checkbox_label" value="Vegetarian" />
               Or a Vegetarian ?
              </label> */}
          </div>
        </div>
        <br></br>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;