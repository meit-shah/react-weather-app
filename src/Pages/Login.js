import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Background from '../images/banner.png';

import '../App.css';

class Login extends Component {
    state = {  }
    render() { 
        let bannerImageStyle = {
            backgroundImage: `url(${Background})`,
            color: "#000",
            padding: "6rem 3rem"
        }
        return ( 
            <div style={bannerImageStyle} className="container-fluid ">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-white text-center font-weight-bold">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control py-3" placeholder="Email address" required autofocus />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control py-3" placeholder="Password" required />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    <Link to="/home">
                                        <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign in</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;