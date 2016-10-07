import React from 'react';
import Message from './Message';
import {Card, List, CircularProgress} from 'material-ui';
import firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';



class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [ChatStore];
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        let messageNodes = null;

        if (!this.props.messagesLoading) {
            console.log(_.values(this.props.messages));
            messageNodes = _.values(this.props.messages).map((message) => {
                return (
                    <Message message={message} />
                );
            });
        } else {
            messageNodes = <CircularProgress mode="indeterminate"
                style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    margin: '0 auto',
                    display: 'block',
                    width: '60px'
                }} />;
        }


        return (
            <Card style={{
                flexGrow: 2,
                overflow: 'scroll',
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

MessageList = connectToStores(MessageList);
export default MessageList;
