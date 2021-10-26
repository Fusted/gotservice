import React, {Component} from "react"
//import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from "../errorMessage/errormessage";
import './pages.css';
import RowBlock from "../rowBlock";
import GotService from "../../services/gotservice";


export default class BookPage extends Component{
    // gotService = new GotService()

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
                selectedItem: id + 1
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
            return <ErrorMessage/> 
        }
        const itemList = (
            <ItemList 
                    renderItem = {({name, gender}) => `${name}`}
                    items = {() => this.props.items()}
                    selectedItem = {(id) => this.onItemSelected(id)}
                    />
        )

        const charDetails = (
            <ItemDetails placeholder='Choose a book' id = {this.state.selectedItem} getResources = {() => GotService.getBook(this.state.selectedItem)}>
                
                <Field field = 'authors' label = 'Authors'/>
                <Field field = 'country' label = 'Country'/> 
                <Field field = 'numberOfPages' label = 'Number of pages'/> 
                
            </ItemDetails>
        )

    
        return (
            <RowBlock left = {itemList} right = {charDetails}/>
        )
    }
}
