import Actions from '../actions';
import firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
  getMessages: {
    remote(state){

      if(firebaseRef){
        firebaseRef.off();
      }
      var ref = '/messages/'+ state.selectedChannel.key;
      console.log(ref);
      firebaseRef = firebase.database().ref(ref); 

      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          var messages = dataSnapshot.val();
          resolve(messages);
          console.log(messages);

          setTimeout(()=> {
            firebaseRef.on("child_added", ((msg) => {
              let msgVal = msg.val();
              msgVal.key = msg.key;
              console.log(msgVal);
              Actions.messageReceived(msgVal);
            }));
          }, 10);

        })
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  },
  sendMessage: {
    remote(state){
      var ref = '/messages/'+ state.selectedChannel.key;
      firebaseRef = firebase.database().ref(ref); 
      return new Promise((resolve, reject)=> {
        if(!firebaseRef){
          return resolve();
        }

        firebaseRef.push({
          "message": state.message,
          "date": new Date().toUTCString(),
          "author": state.user.displayName,
          "userId": state.user.uid,
          "photoURL": state.user.photoURL
        });
        resolve();
      });
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
}

export default MessageSource;
