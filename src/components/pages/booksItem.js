import React, {Component} from "react"
import GotService from "../../services/gotservice"
import ItemDetails, {Field} from "../itemDetails/itemDetails"

export default class BooksItem extends Component {

    render(){

        const bookId = this.props.bookId

        return (
            <ItemDetails placeholder='Choose a book' id = {bookId} getResources = {() => GotService.getBook(bookId)}>
                
                <Field field = 'authors' label = 'Authors'/>
                <Field field = 'country' label = 'Country'/> 
                <Field field = 'numberOfPages' label = 'Number of pages'/> 
                
            </ItemDetails>
        )
    }
}