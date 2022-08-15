import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5t6C8QWgHzyqPumJ0_IVPcQI37EBcElw",
  authDomain: "test1-a9afc.firebaseapp.com",
  databaseURL: "https://test1-a9afc.firebaseio.com",
  projectId: "test1-a9afc",
  storageBucket: "test1-a9afc.appspot.com",
  messagingSenderId: "261819303129",
  appId: "1:261819303129:web:3cbf2fb077f789313deac8"
};

//export default initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export default app;