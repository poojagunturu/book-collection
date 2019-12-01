import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function SelectSearch() {

    return(
        <main>            
            <div className="container">
                <h1 style={{margin: 8}}>Select Search:</h1>
                <div className="inner-container">
                    <Link to="/BookDisplay">
                        <button style={{margin: 4}}>Search Database</button>
                    </Link>
                    <Link to="/GoogleBookDisplay">
                        <button style={{margin: 4}}>Search Google</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default SelectSearch