import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Button from 'reactstrap/lib/Button';
import ErrorMessage from '../errorMessage/errormessage';
import { CharacterPage, BookPage, HousePage, BooksItem, CharactersItem } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css'

export default class App extends Component{

    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    toggleRandom = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render(){
         
        const char = this.state.showRandomChar ? <RandomChar/> : null 

        if (this.state.error){
            return <ErrorMessage/> 
        }

        return (
            <Router> 
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <Button 
                                    className='random-btn'  
                                    color="primary" 
                                    size="lg"
                                    onClick = {this.toggleRandom}
                                >Click me</Button>
                            </Col>
                        </Row>
                        
                        <Route path='/characters/' component={CharacterPage}/>
                        <Route path='/books/' exact component={BookPage}/>
                        <Route path='/houses/' component={HousePage}/>
                        
                        <Route path='/books/:id' render={
                            ({match}) => {
                                return <BooksItem bookId = {match.params.id}/>
                            }
                        }/>

                        <Route path='/houses/:id' render={
                            ({match}) => {
                                return <BooksItem bookId = {match.params.id}/>
                            }
                        }/>
                        
                        <Route path='/characters/:id' render={
                            ({match}) => {
                                return <CharactersItem charId = {match.params.id}/>
                            }
                        }/>
                        

                    </Container>
                </div>
            </Router>
        );
    }
};

 