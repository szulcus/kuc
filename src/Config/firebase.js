import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/storage'

const config = {
	apiKey: "AIzaSyC-vaM6Q9ss-t-JmmqyCI6Mppn4qR72nLg",
	authDomain: "kuc-meble-na-wymiar.firebaseapp.com",
	databaseURL: "https://kuc-meble-na-wymiar.firebaseio.com",
	projectId: "kuc-meble-na-wymiar",
	storageBucket: "kuc-meble-na-wymiar.appspot.com",
	messagingSenderId: "489356109218",
	appId: "1:489356109218:web:62bb45d2ec61fc38a07efb",
	measurementId: "G-S9E6N62FVG"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

const db = firebase.firestore();
const au = firebase.auth();
const auth = firebase.auth;
const fu = firebase.functions();
const st = firebase.storage();
let user = null;
au.onAuthStateChanged(snap => {
	if (snap) {
		user = snap
	}
})

export default firebase
export {
	db,
	au,
	auth,
	fu,
	st,
	user
}