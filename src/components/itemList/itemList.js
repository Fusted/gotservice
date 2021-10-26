import React, {Component} from 'react';
import './itemList.css';
// import GotService from '../../services/gotservice';
import Spinner from '../spinner/spinner';


export default class ItemList extends Component {

    // gotService = new GotService()

    state = {
        items: null
    }

    componentDidMount(){
        
        this.props.items ()
            .then((itemList) => {
                this.setState({itemList})
            })
    }



    renderItems(items){
        const {selectedItem} = this.props
        
        return(
            items.map((item, i) => { 
                const id = i
                const label = this.props.renderItem(item)
                return (
                    <li 
                    key={Object.values(item).join('') + i}
                    onClick = {() => selectedItem(id)} 
                    className="list-group-item">
                        {label}
                    </li>
                )
            })
        )
        
    }

    render() {

        const {itemList} = this.state
        
        if(!itemList){
            return <Spinner />
        }
        
        const items = this.renderItems(itemList)
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}