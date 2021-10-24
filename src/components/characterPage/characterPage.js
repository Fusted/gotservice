import React, {Component} from "react"
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../errorMessage/errormessage";

export default class CharacterPage extends Component{
    state = {
        error: false,
        selectedChar: null
    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState(() => {
            return {
                selectedChar: id
            }
        })
        
    }

    render(){
        if (this.state.error){
            return <ErrorMessage/> 
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList 
                    selectedChar = {(id) => this.onCharSelected(id)}
                    />
                </Col>

                <Col md='6'>
                    <CharDetails
                    id = {this.state.selectedChar}
                        />
                </Col>
            </Row>
            
        )
    }
}
