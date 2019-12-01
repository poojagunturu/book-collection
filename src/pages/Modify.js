import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

//class used for modify page
export class Modify extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment >
                <AppBar title = "Antiquarian Database Modify" showMenuIconButton={false}/>
                <br/>
                <RaisedButton
                     label = "Back to Search"
                     primary = {true}
                     onClick = {this.props.searchPage}
                    />
                    <br/>
                    <br/>
                <RaisedButton
                     label = "Back to Results"
                     primary = {true}
                     onClick = {this.props.resultsPage}
                    />
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Modify
