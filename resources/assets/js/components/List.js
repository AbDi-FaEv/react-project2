import React, {Component} from 'react';
import TaskCard from "./TaskCard";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cards = this.props.cards.map( (card) => (
            <TaskCard key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tasks={card.tasks}
            />
        ));

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="card-wrapper">
                    { cards }
                </div>
            </div>
        );
    }
}

export default List;