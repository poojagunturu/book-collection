import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

//class used for results page
export class Results extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment >
                <AppBar title = "Antiquarian Database Results" showMenuIconButton={false}/>
                <br/>
                <RaisedButton
                     label = "Back to Search"
                     primary = {true}
                     onClick = {this.props.searchPage}
                    />
                    <br/>
                    <br/>
                <RaisedButton
                     label = "Modify"
                     primary = {true}
                     onClick = {this.props.modifyPage}
                    />
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Results
