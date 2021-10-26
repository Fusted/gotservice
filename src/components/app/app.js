import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Button from 'reactstrap/lib/Button';
import ErrorMessage from '../errorMessage/errormessage';
import GotService from '../../services/gotservice';
import { CharacterPage, BookPage, HousePage } from '../pages';


export default class App extends Component{
    // gotService = new GotService()

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

        const characters = () => GotService.getAllCharacters()
        const books = () => GotService.getAllBooks()
        const houses = () => GotService.getAllHouses()
        
        const char = this.state.showRandomChar ? <RandomChar/> : null 

        if (this.state.error){
            return <ErrorMessage/> 
        }
        return (
            <> 
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
                    <CharacterPage
                    items = {() => characters()}
                    />
                    <BookPage
                    items = {() => books()}
                    />

                    <HousePage
                    items = {() => houses()}
                    />

                </Container>
            </>
        );
    }
};

 