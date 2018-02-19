import React, {Component} from 'react';
import Card from "./Card";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cards = this.props.cards.map( (card) => (
            <Card key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tasks={card.tasks}
            />
        ));

        return (
            <div>
                { cards }
            </div>
        );
    }
}

export default List;