import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/gotservice';
import Spinner from '../spinner/spinner';


export default class ItemList extends Component {

    gotService = new GotService()

    state = {
        charachters: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({charList})
            })
    }



    renderItems(items){
        const {selectedChar} = this.props

        return(
            items.map((item, i) => {
                const id = i
                return (
                    <li 
                    key={id}
                    onClick = {() => selectedChar(120 + id)}
                    className="list-group-item">
                        {item.name}
                    </li>
                )
            })
        )
        
    }

    render() {

        const {charList} = this.state
        
        if(!charList){
            return <Spinner />
        }

        const items = this.renderItems(charList)
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}