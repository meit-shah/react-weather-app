import React from 'react';

export default function SearchLocation(props) {

    let inputStyle = {
        background: "transparent",
        border: "3px solid #fff",
        color: "#fff",
        borderRadius: "10px",
        fontSize: "1.75rem"
    }

    
    // localStorage.setItem('myData',"this is my local storage data");

    // let data = localStorage.getItem('myData');

    return (
        <div className="col">
            <form className="" onSubmit={(e) => props.changeWeather(e)}>
                <input style={inputStyle} type="text" className="p-3 w-100 text-center text-white inputStyle" placeholder="Enter Location" onChange={(e) => {
                    props.changeLocation(e.target.value);
                }} />
                {/* <button className="btn btn-lg btn-primary mt-3 p-3 w-100" type="submit">Check Location Weather</button> */}
            </form>
        </div>
        
    )
}