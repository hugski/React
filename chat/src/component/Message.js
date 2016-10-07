import React from 'react';
import {ListItem, Avatar} from 'material-ui';


export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src={this.props.message.photoURL}/>}>
                {this.props.message.message}
            </ListItem>
        );
    }
}