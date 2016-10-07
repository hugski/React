import React from 'react';
import Channel from './Channel';
import {Card, List, CircularProgress}from 'material-ui';
import ChatStore from '../stores/ChatStore';
import connectToStores from 'alt/utils/connectToStores';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        ChatStore.getChannels();
    }

    static getStores() {
        return [ChatStore];
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        if (!this.props.channels) {
            return (
                <Card style={{
                    flexGrow: 1
                }}>
                    <CircularProgress
                        mode="indeterminate"
                        style={{
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            paddingLeft:'20px',
                            margin: '0 auto',
                            display: 'block',
                            width: '60px'
                        }}
                        />
                </Card>
            );
        }

        console.log(_(this.props.channels));
        var channelNodes = _(this.props.channels)
            .keys()
            .map((k) => {
                let channel = this.props.channels[k];
                return (
                    <Channel channel={channel} />
                );
            })
            .value();

        return (
            <Card style={{
                flexGrow: 1,
                padding:'10px'
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}
ChannelList = connectToStores(ChannelList);
export default ChannelList;
