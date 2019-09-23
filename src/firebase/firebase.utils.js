import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCpLe3mJXYKB2o3Yp5GESEV1TpukVYj9cY',
	authDomain: 'react-yoko.firebaseapp.com',
	databaseURL: 'https://react-yoko.firebaseio.com',
	projectId: 'react-yoko',
	storageBucket: '',
	messagingSenderId: '523718679434',
	appId: '1:523718679434:web:93d5f00cd3b79a09398673'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();