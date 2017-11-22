import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1> Swim Log </h1>
                <p> Application for logging swims </p>
                <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
            </div>
        );
    }
}

export default Home;