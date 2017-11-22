//This component handles the app template that will be used on every page

import React, {PropTypes} from 'react';
import Header from './shared/header';

//passing down the children that it receives as props. these children will be passed in from react router
//React router will be passing child components as properties onto our app component and then they will be composed right here on the page
class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <Header />
                {this.props.children} 
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;