const ref = firebase.firestore().collection('requests');

// i will change this section 
// because we need get data by a firebase function for security
ref.onSnapshot(snapshot => {
    
    let requests = [];
    snapshot.forEach(doc => {
        requests.push({...doc.data(), id: doc.id});
    });
    //console.log(requests);
    let html = ``;
    requests.forEach(request => {
        html += `
        <li>
          <span class="text">${request.text}</span>
          <div>
            <span class="votes">${request.upvotes}</span>
            <i class="material-icons upvote">arrow_upward</i>
          </div>
        </li>
        `;
    });
    document.querySelector("ul").innerHTML = html;
});