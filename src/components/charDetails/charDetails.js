import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotservice';



export default class CharDetails extends Component {
    gotService = new GotService()

    state = {
        char: null
    }

    componentDidMount(){
        this.updateChar()
        
    }

    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.id){
            this.updateChar()
        }
    }

    updateChar(){
        if (!this.props.id){
            return
        }

        
        this.gotService.getCharacter(this.props.id)
            .then((char) => {
                this.setState({char})
            })
        
    }

    render() {
        if (!this.state.char){
            
            return (
                <span className='select-error'>Choose character</span>
            )
        }
    
        const {name, gender, born, died, culture} = this.state.char
    
        return (
            <div className="char-details rounded">
                <h4>J{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}