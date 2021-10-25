import React, {Component} from "react"
//import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, { Field } from '../charDetails';
import ErrorMessage from "../errorMessage/errormessage";
import './characterPage.css';
import RowBlock from "../rowBlock";

export default class CharacterPage extends Component{
    state = {
        error: false,
        selectedItem: null
    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState(() => {
            return {
                selectedItem: id
            }
        })
        
    } 

    render(){
        if (this.state.error){
            return <ErrorMessage/> 
        }
        const itemList = (
            <ItemList 
                    renderItem = {({name, gender}) => `${name} (${gender})`}
                    items = {() => this.props.items()}
                    selectedItem = {(id) => this.onItemSelected(id)}
                    />
        )

        const charDetails = (

            <CharDetails id = {this.state.selectedItem}>
                <Field field = 'gender' label = 'Gender'/>
                <Field field = 'born' label = 'Born'/> 
            </CharDetails>
        )

        return (
            <RowBlock left = {itemList} right = {charDetails}/>
        )
    }
}
