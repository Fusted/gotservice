import React, {Component} from "react"
//import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from "../errorMessage/errormessage";
import './pages.css';
import RowBlock from "../rowBlock";
import GotService from "../../services/gotservice";

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
                selectedItem: id + 41
            }
        })
    } 

    onField = (fields) => {
        fields.map(field => {
            return <Field field = {field[0]} label = {field[1]}/>
        })
    }

    
    render(){
        if (this.state.error){
            return <ErrorMessage placeholder='Choose a caracter'/> 
        }
        const itemList = (
            <ItemList 
                    renderItem = {({name, gender}) => `${name} (${gender})`}
                    items = {() => this.props.items()}
                    selectedItem = {(id) => this.onItemSelected(id)}
                    />
        )
           
        const charDetails = (
            <ItemDetails placeholder='Choose a caracter' id = {this.state.selectedItem} getResources = {() => GotService.getCharacter(this.state.selectedItem)}>
                
                <Field field = 'gender' label = 'Gender'/>
                <Field field = 'born' label = 'Born'/> 
                <Field field = 'died' label = 'Died'/> 
                <Field field = 'culture' label = 'Culture'/> 
                
            </ItemDetails>
        )

    
        return (
            <RowBlock left = {itemList} right = {charDetails}/>
        )
    }
}
