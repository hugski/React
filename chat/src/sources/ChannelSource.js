import Actions from '../actions';
import firebase from 'firebase';
var config = {
            apiKey: "AIzaSyAv9FoihYRI-K_rQbIoj3j6KTL0VdJUBpE",
            authDomain: "react-chat-67fc8.firebaseapp.com",
            databaseURL: "https://react-chat-67fc8.firebaseio.com"
};
firebase.initializeApp(config);
let firebaseRef = firebase.database().ref('/channels');

let ChannelSource = {
  getChannels: {
    remote(state){
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot)=> {
          var channels = dataSnapshot.val();
          resolve(channels);
          console.log(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;
