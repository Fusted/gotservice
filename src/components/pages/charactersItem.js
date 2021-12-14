import React, {Component} from "react"
import GotService from "../../services/gotservice"
import ItemDetails, {Field} from "../itemDetails/itemDetails"

export default class CharactersItem extends Component {

    render(){

        const charId = +this.props.charId + 40
    

        return (
            <ItemDetails placeholder='Choose a character' id = {charId} getResources = {() => GotService.getCharacter(charId)}>
                
                <Field field = 'gender' label = 'Gender'/>
                <Field field = 'born' label = 'Born'/> 
                <Field field = 'died' label = 'Died'/> 
                <Field field = 'culture' label = 'Culture'/> 
                
            </ItemDetails>
        )
    }
}