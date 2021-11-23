

// i will change this section 
// because we need get data by a firebase function for security
var request = new Vue({
    el: '#request',
    data: {
      requests: []
    },
    methods: {
        upvoteRequest: function (id) {
            const upvote = firebase.functions().httpsCallable('upvote');
            upvote({ 
                id: id })
            .cath(error => {
                    console.log(error.message);
            });
        }
    },
    mounted () {
        const ref = firebase.firestore().collection('requests').orderBy('upvotes', 'desc');
        ref.onSnapshot(snapshot => {
    
            let requests = [];
            snapshot.forEach(doc => {
                requests.push({...doc.data(), id: doc.id});
            });
            this.requests = requests;
        });
    }
});

