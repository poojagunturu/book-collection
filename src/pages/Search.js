import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Card, DataTable, Page} from '@shopify/polaris';

//class used for search page
export class Search extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
        parsedResponse: ''
      };

      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
      
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
      
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.values),
        });
        const body = await response.text();
        this.setState({ responseToPost: body, 
                        responseReceived: true});
        const rtp = JSON.parse(this.state.responseToPost);
        this.setState({parsedResponse: rtp});
        //console.log(this.state.parsedResponse.rows);
        //this.props.handleChange(this.state.responseToPost);
      };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <form id="formSearch" onSubmit={this.handleSubmit}>
                        <AppBar title = "Antiquarian Database Search" showMenuIconButton={false}/>
                        <TextField 
                            name = "isbn"
                            floatingLabelText = "ISBN"
                            onChange = {handleChange('isbn')}
                            defaultValue = {values.isbn}
                        />
                        <br/>
                        <TextField 
                            name = "title"
                            floatingLabelText = "Title"
                            onChange = {handleChange('title')}
                            defaultValue = {values.title}
                        />
                        <br/>
                        <TextField 
                            name = "edition"
                            floatingLabelText = "Edition"
                            onChange = {handleChange('edition')}
                            defaultValue = {values.edition}
                        />                    
                        <br/>
                        <TextField 
                            name = "genre"
                            floatingLabelText = "Genre"
                            onChange = {handleChange('genre')}
                            defaultValue = {values.genre}
                        />
                        <br/>
                        <TextField 
                            name = "no_pages"
                            floatingLabelText = "Number of Pages"
                            onChange = {handleChange('numPages')}
                            defaultValue = {values.numPages}
                        />                    
                        <br/>
                        <TextField 
                            name = "publisher"
                            floatingLabelText = "Publisher"
                            onChange = {handleChange('publisher')}
                            defaultValue = {values.publisher}
                        />
                        <br/>
                        <TextField 
                            name = "pub_year"
                            floatingLabelText = "Publish Year"
                            onChange = {handleChange('publishYear')}
                            defaultValue = {values.publishYear}
                        />
                        <br/>
                        <FormControl>
                            <InputLabel htmlFor="jacket">Jacket</InputLabel>
                            <Select
                                defaultValue = {values.jacket}
                                onChange = {handleChange('jacket')}
                                name = "jacket"
                            >
                                <MenuItem value={''}> </MenuItem>
                                <MenuItem value={'As New'} name = "as_new">As New</MenuItem>
                                <MenuItem value={'Very Good'} name = "very_good">Very Good</MenuItem>
                                <MenuItem value={'Good'} name = "good">Good</MenuItem>
                                <MenuItem value={'Fine'} name = "fine">Fine</MenuItem>
                                <MenuItem value={'Fair'} name = "fair">Fair</MenuItem>
                                <MenuItem value={'Poor'} name = "poor">Poor</MenuItem>
                                <MenuItem value={'No Jacket'} name = "no_jacket">No Jacket</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Grade</InputLabel>
                            <Select
                                defaultValue = {values.grade}
                                onChange = {handleChange('grade')}
                                name = "grade"
                            >
                                <MenuItem value={''}> </MenuItem>
                                <MenuItem value={'As New'}>As New</MenuItem>
                                <MenuItem value={'Very Good'}>Very Good</MenuItem>
                                <MenuItem value={'Good'}>Good</MenuItem>
                                <MenuItem value={'Fine'}>Fine</MenuItem>
                                <MenuItem value={'Fair'}>Fair</MenuItem>
                                <MenuItem value={'Poor'}>Poor</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel >Binding</InputLabel>
                            <Select
                                defaultValue = {values.binding}
                                onChange = {handleChange('binding')}
                                name = "binding"
                            >
                                <MenuItem value={''}> </MenuItem>
                                <MenuItem value={'Soft Cover'}>Soft Cover</MenuItem>
                                <MenuItem value={'Hard Cover'}>Hard Cover</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            floatingLabelText="Notes"
                            multiline
                            rows="4"
                            margin="normal"
                            defaultValue = {values.notes}
                            onChange = {handleChange('notes')}
                            name = "notes"
                        />
                        <br/>
                        <RaisedButton
                            label = "Search"
                            primary = {true}
                            type = "submit"
                        />
                        <br/>
                    </form>
                    <div>{this.state.parsedResponse?
                    <Page title="Book Data">
                        <Card>
                            <DataTable
                            columnContentTypes={[
                                'text',
                                'text',
                                'text',
                                'text',
                                'numeric',
                                'text',
                                'numeric',
                                'text',
                                'text',
                                'text',
                                'text',
                            ]}
                            headings={[
                                'ISBN',
                                'TITLE',
                                'EDITION',
                                'GENRE',
                                'PAGES',
                                'PUBLISHER',
                                'PUBLISH YEAR',
                                'JACKET',
                                'GRADE',
                                'BINDING',
                                'NOTES',
                            ]}
                            rows={this.state.parsedResponse.rows}
                            />
                        </Card>
                    </Page>: <p></p> }</div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Search
