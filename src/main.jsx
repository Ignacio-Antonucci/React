import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCIwNbLh_XBgYePHj1F2_PDWWyosEactA",
  authDomain: "primer-e-commerce-4ba1b.firebaseapp.com",
  projectId: "primer-e-commerce-4ba1b",
  storageBucket: "primer-e-commerce-4ba1b.appspot.com",
  messagingSenderId: "795850742988",
  appId: "1:795850742988:web:f3c278404f4d64f90ef669"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
