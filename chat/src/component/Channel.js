import React from 'react';
import {ListItem} from 'material-ui';
import Actions from '../actions/index'


export default class Channel extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        Actions.channelOpened(this.props.channel);
    }

    render() {
        let style = {};

        if (this.props.channel.selected) {
            style.backgroundColor = '#f0f0f0';
        }

        return (
            <ListItem
                onClick={this.onClick.bind(this) }
                style={style}
                key={this.props.channel.key}
                >{this.props.channel.name}</ListItem>
        );
    }
}