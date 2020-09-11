import firebase from 'firebase'

import firebase_config from '../../../env/firebase_config.json'

const firebaseConfig = firebase_config

export const FirebaseApp = firebase.initializeApp(firebaseConfig)