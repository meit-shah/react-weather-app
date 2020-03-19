import React from 'react';

export default function SearchHistory(props){
    let localStorage = [];
    for(let i=0;i<props.localData.length;i++){
        localStorage.push(<li className="m-4" key={i}>{ props.localData[i] }</li>);
    }
    // let parsedStorage = JSON.parse(localStorage);
    // console.log(parsedStorage); 
    return (
        <div className="container m-5">
            <h1>Your Search History :</h1>
            <ul className="mt-4">
                { localStorage }    
            </ul>
        </div>
    )
}