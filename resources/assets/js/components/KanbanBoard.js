import React, { Component } from 'react';

import List from './List';

class KanbanBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper">
                <List className="kanban-list" id="todo" title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List className="kanban-list" id="in-progress" title="In Progress" cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List className="kanban-list" id="done" title="Done" cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }
}

export default KanbanBoard;