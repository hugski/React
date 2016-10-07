import React from 'react';
import {Card, CardText, RaisedButton}  from 'material-ui';
import Actions from '../actions';

class Login extends React.Component {

    onClick(){
      Actions.login();
    }

    render(){

        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                To start chatting away, please log in with your Google account.
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Log in with Google" primary={true} />
            </Card>

        );
    }
}


module.exports = Login;
