import React, {Component} from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {Subheader} from "material-ui";


class CheckList extends Component {
    constructor(props) {
        super(props);

        this.updateCheck = this.updateCheck.bind(this);
    }

    updateCheck(event) {
        event.target.checked = !event.target.checked;
    }
    render() {
        let tasks = this.props.tasks.map((task) => (
            <ListItem key={task.id}
                      className="checklist__task"
                      primaryText={
                          <Checkbox
                              label={task.name}
                              checked={task.done}
                          />
                      }
            />
        ));

        return (
            <div className="checklist">
                <List>
                    <Subheader>tasks</Subheader>
                    { tasks }
                </List>
                <TextField
                    hintText="new task"
                    floatingLabelText="Add new task"
                />
            </div>
        );
    }
}

export default CheckList;