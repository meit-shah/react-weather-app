import React from 'react';

export default function Navbar(props) {
    let navBrandIcon = {
        height: "40px",
        width: "40px"
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-4">
            <img src={require('../images/cloudy.png')} style={navBrandIcon} alt="brand-icon" /> <a className="navbar-brand mr-auto white px-3 pt-3" href="#">
                {props.brandName}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">  
                <ul className="nav navbar-nav ml-auto text-left">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Welcome, {props.username}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}