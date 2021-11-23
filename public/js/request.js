const ref = firebase.firestore().collection('requests');

// i will change this section 
// because we need get data by a firebase function for security
var request = new Vue({
    el: '#request',
    data: {
      requests: []
    },
    mounted () {
        ref.onSnapshot(snapshot => {
    
            let requests = [];
            snapshot.forEach(doc => {
                requests.push({...doc.data(), id: doc.id});
            });
            this.requests = requests;
        });
    }
});

