import React, { Component } from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import Login from './Login';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';
// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const muiTheme = getMuiTheme({
            palette: {
                primary1Color: blue500,
                primary2Color: blue700,
                primary3Color: blue100,
                accent1Color: pink400
            }
        });

class App extends Component {
    constructor() {
        super();
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(muiTheme) };
    }
    static getStores() {
        return [ChatStore];
    }
    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        if (this.props.user) {
            return(
                <div>
                <AppBar title="Awesome Chat App" />
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        overflow: 'scroll',
                        maxWidth: 1200,
                        height: 500,
                        width: '100%',
                        margin: '30px 10px 30px 10px'
                    }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            )
                
        } else{

            return (
                <div>
                    <AppBar title="Awesome Chat App" />
                    <Login />
                </div>
            );
        }
    }

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object,
}
App = connectToStores(App);

export default App;