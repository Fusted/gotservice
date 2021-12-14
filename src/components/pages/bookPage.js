import React, {Component} from "react"
import ItemList from '../itemList';
import ErrorMessage from "../errorMessage/errormessage";
import './pages.css';
import GotService from "../../services/gotservice";
import { withRouter } from "react-router";

class BookPage extends Component{

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

    render(){
        if (this.state.error){
            return <ErrorMessage/> 
        }
        
        return (
            <ItemList 
                renderItem = {({name, gender}) => `${name}`}
                items = {() => GotService.getAllBooks()}
                selectedItem = {(id) => 
                    this.props.history.push(`/books/${id}`)
                }
            />
        )
    }
}

export default withRouter(BookPage)