import React, { Component } from 'react';

import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "Open the Book",
        description: "I should open this book",
        color: '#000',
        status: "done",
        tasks: []
    },
    {
        id: 4,
        title: "Cook the dinner",
        description: "I should cook the dinner",
        color: '#3A7E28',
        status: "todo",
        tasks: []
    }
];

class App extends Component {

    render() {
        return (
            <KanbanBoard cards = {cardsList}/>
        );
    }
}

export default App
