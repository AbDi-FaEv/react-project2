import React, {Component} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CheckList from './CheckList';

class TaskCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { id, title, description, color, tasks } = this.props;

        let sideColor = {
            backgroundColor: color
        };

        return (
            <Card>
                <CardHeader
                    title={title}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={sideColor}
                />
                <CardText expandable={true}>
                    {description}
                    <CheckList cardId = { id } tasks={ tasks }/>
                </CardText>
            </Card>
        );
    }
}

export default TaskCard;