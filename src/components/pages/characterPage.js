import React, {Component} from "react"
import ItemList from '../itemList';
import ErrorMessage from "../errorMessage/errormessage";
import './pages.css';
import GotService from "../../services/gotservice";
import {withRouter} from 'react-router'

class CharacterPage extends Component{
    
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

    
    render(){
        if (this.state.error){
            return <ErrorMessage placeholder='Choose a caracter'/> 
        }
        
        return (
            <ItemList 
                renderItem = {({name, gender}) => `${name} (${gender})`}
                items = {() => GotService.getAllCharacters()}
                selectedItem = {(id) => 
                    this.props.history.push(`/characters/${id}`)}
                />
        )
    }
}

export default withRouter(CharacterPage)