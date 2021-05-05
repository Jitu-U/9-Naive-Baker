//Login Component for Login Page  by Dhyey & Mitesh
import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
import loginImg from "./login.jpg";
import { withRouter } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password:"",
        url : "https://naivebakerr.herokuapp.com/user/login"
      }
    }
    handle = (event) => {
      let id = event.target.name;
      let val = event.target.value;
      console.log(id + " " + val);
      this.setState({[id]:val});
    }
    mysubmit = (event) => {
      event.preventDefault();
      console.log(this.state.email,this.state.password);
      Axios.post(this.state.url,{
        email : this.state.email,
        password : this.state.password
      })
      .then(res => {
        if(res.data.ok === true)
        {
          localStorage.setItem('auth-token',res.data.data.token);
          this.props.setisAuth(true);
          this.props.history.push('/');
        }
        else
        {
          console.log(res.data);  
          alert(res.data.err.msg);
        }
      })
      .catch(res => { alert(res) })
    }
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            {/* <div className="image">
              <img src={loginImg} />
            </div> */}
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="text" name="email" onChange={this.handle} placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handle} placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={(e)=>this.mysubmit(e)}>
              Login
            </button>
          </div>
        </div>
      );
    }
  }

export default withRouter(Login);
