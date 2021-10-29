import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

const initilizeAuthentication = () => {
        initializeApp(firebaseConfig)
}

export default initilizeAuthentication;

