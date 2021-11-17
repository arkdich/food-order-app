import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTX79XeOxU3mK7XDJ3F-O0uyTK1d_1yE4',
  authDomain: 'dodo-clone.firebaseapp.com',
  projectId: 'dodo-clone',
  storageBucket: 'dodo-clone.appspot.com',
  messagingSenderId: '660567333998',
  appId: '1:660567333998:web:dab0ae22417bd8ad829a7f',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const pizzasRef = collection(db, 'pizzas');
const specialsRef = doc(db, 'specials', 'w8gmCpqkrlYMzhfnv4Rf');

export { db, pizzasRef, specialsRef };
