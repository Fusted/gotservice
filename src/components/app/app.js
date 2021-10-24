import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';
import Button from 'reactstrap/lib/Button';
import ErrorMessage from '../errorMessage/errormessage';

export default class App extends Component{
    state = {
        showRandomChar: true,
        error: false,
        selectedChar: 130
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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
    
};
