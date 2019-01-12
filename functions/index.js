const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
db.settings({
    timestampsInSnapshots: true
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.deleteTempUsersOnLogout = functions.firestore
.document('users/{userId}')
.onUpdate((change, context) => {
    // Get information on the user
    const loginStatus = change.after.data().loginStatus;
    const isAnonymous = change.after.data().isAnonymous;

    // return early if the user is
    if (!isAnonymous || loginStatus === 'Logged In') return {};

    const userId = context.params.userId;

    const batchSize = 500;
    var collectionRef = db.collection(`users/${userId}/movies`);
    var query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        return deleteQueryBatch(db, query, batchSize, resolve, reject);
    });

    function deleteUserAfterMovies() {
        db.collection('users').doc(userId).delete()
        .catch(error => {
            console.error(error)
        })
    }

    function deleteQueryBatch(db, query, batchSize, resolve, reject) {
        query.get()
        .then((snapshot) => {
            // When there are no documents left, we are done
            if (snapshot.size === 0) {
                return 0;
            }

            // Delete documents in a batch
            var batch = db.batch();
            snapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
            });

            return batch.commit().then(() => {
                return snapshot.size;
            });
        }).then((numDeleted) => {
            if (numDeleted === 0) {
                deleteUserAfterMovies();
                resolve();
                return {};
            }

            // Recurse on the next process tick, to avoid
            // exploding the stack.
            process.nextTick(() => {
                deleteQueryBatch(db, query, batchSize, resolve, reject);
            });
        })
        .catch(reject);
    }
});
