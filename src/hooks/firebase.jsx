import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
	apiKey: 'AIzaSyDbTYy6mzBkPDV3kSFNaCPgdP8M-EQ8B-Y',
	authDomain: 'portfolio-b7e94.firebaseapp.com',
	projectId: 'portfolio-b7e94',
	storageBucket: 'portfolio-b7e94.appspot.com',
	messagingSenderId: '1046621929428',
	appId: '1:1046621929428:web:4ed35915b022a22b3a6041',
	measurementId: 'G-QNNPD0S837'
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		/* Firebase APIs */
		this.auth = app.auth();
		this.db = app.firestore();
	}

	user = (uid) => this.db.collection('WebUser').doc(uid);

	db = () => this.db;
}

export default Firebase;
