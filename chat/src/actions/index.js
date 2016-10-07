import alt from '../alt';
import firebase from 'firebase';
class Actions {
    constructor(){
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }
    login(args) { // actions 
  // Initialize Firebase
        var provider = new firebase.auth.GoogleAuthProvider();
        // var firebaseRef = firebase.database().ref('/messages');
        return (dispatch) => {
            firebase.auth().signInWithPopup(provider).then(function (result) {
                // var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
                dispatch(user);
            }).catch(function (error) {
                return;
            });
        };
    }
}

export default alt.createActions(Actions);