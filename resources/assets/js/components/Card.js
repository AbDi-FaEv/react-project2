import React, {Component} from 'react';

import CheckList from './CheckList';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails : true
        };

        this.toggleDetails = this.toggleDetails.bind(this)
    }
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    render() {
        const { id, title, description, tasks } = this.props;

        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    { this.props.description }
                    <CheckList cardId={ id } tasks={ tasks }/>
                </div>
            );
        }
        return (
            <div className="card"  onClick={this.toggleDetails}>
                <div className="card__title">
                    { this.props.title }
                </div>
                { cardDetails }
            </div>
        );
    }
}

export default Card;