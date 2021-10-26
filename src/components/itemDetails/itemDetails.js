import React, {Component} from 'react';
import './itemDetails.css';
// import GotService from '../../services/gotservice';
import Spinner from 'reactstrap/lib/Spinner';

const Field = ({item, label, field }) => {
    
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}
export default class ItemDetails extends Component {
    // gotService = new GotService()

    state = {
        loading: true,
        item: null
    }

    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.id){
            this.updateItem()
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    onError(){
        this.setState({
            item: null,
            error: true
        })
    }

    updateItem(){
        if (!this.props.id){
            return
        }
        
        this.setState({
            loading: true
        })
        
        this.props.getResources()
            .then((item) => {this.onItemLoaded(item)})
            .catch(() => this.onError())
        
    }

    render() {
        if (!this.state.item){
            
            return (
                <span className='select-error'>{this.props.placeholder}</span>
            )

        }
        
        if (this.state.loading){
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }

        const {item} = this.state
        const {name} = item
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {   
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}