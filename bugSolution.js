The corrected code uses a `.then()` to make sure the promise returned by `getDoc()` has been resolved. This way, the `doc.data()` will only be called once the data has been successfully loaded.  Error handling is also added to handle cases where the document doesn't exist.
```javascript
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();
const docRef = doc(db, 'yourCollection', 'yourDocId');

getDoc(docRef)
  .then((doc) => {
    if (doc.exists()) {
      console.log('Document data:', doc.data());
    } else {
      console.log('Document does not exist.');
    }
  })
  .catch((error) => {
    console.error('Error getting document:', error);
  });
```