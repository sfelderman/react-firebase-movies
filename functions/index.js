const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.newMovieCreated = functions.firestore
    .document('users/{userId}/movies/{movieId}').onWrite((change, context) => {
  // ... Your code here
     console.log(change, context);

        return {
            change,
            context
        }
});

exports.sayHello = functions.auth.user().onCreate((user) => {
    // [END onCreateTrigger]
      // [START eventAttributes]
      const email = user.email; // The email of the user.
      const displayName = user.displayName; // The display name of the user.
      // [END eventAttributes]

      console.log(email, displayName);
      return {
          email,
          displayName
      }
    });