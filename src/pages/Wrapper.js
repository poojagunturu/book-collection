import React, { Component } from 'react'
import Search from './Search';
import Results from './Results';
import Modify from './Modify';

//Wrapper to navigate from page to page
export class Wrapper extends Component {
    //state used to keep track of details of book
    state = {
        page: 'search',
        isbn: '',
        title: '',
        edition: '',
        genre: '',
        numPages: '',
        publisher: '',
        publishYear: '',
        jacket: '',
        grade: '',
        binding: '',
        notes: ''
    }

    //Go to search page
    searchPage = () => {
        const {page} = this.state;
        this.setState({
            page: 'search'
        });
    }
    
    //Go to results page
    resultsPage = () => {
        const {page} = this.state;
        this.setState({
            page: 'results'
        });
    }

    //Go to modify page
    modifyPage = () => {
        const {page} = this.state;
        this.setState({
            page: 'modify'
        });
    }
    
    //handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { page } = this.state;
        const { isbn, title, edition, genre,
            numPages, publisher, publishYear,
            jacket, grade, binding, 
            notes} = this.state;
            
        const values = { isbn, title, edition, genre,
            numPages, publisher, publishYear,
            jacket, grade, binding, 
            notes} 


        //switch statement to control displaying of desired page
        switch(page) {
            case ('search'):
                return (
                    <Search
                     resultsPage = {this.resultsPage}
                     handleChange = {this.handleChange}
                     values = {values}
                    />
                )
            case ('results'):
                return (
                    <Results
                    searchPage = {this.searchPage}
                    modifyPage = {this.modifyPage}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                    )
            case ('modify'):
                return (
                <Modify
                searchPage = {this.searchPage}
                resultsPage = {this.resultsPage}
                handleChange = {this.handleChange}
                values = {values}
                />
                )
        }
    }
}

export default Wrapper
