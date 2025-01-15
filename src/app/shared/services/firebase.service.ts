import { Injectable } from '@angular/core';
import {initializeApp, getAuth, getFirestore} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAXsBeedIuewcGfRyuKFNBNk6UcYpPs2k8",
  authDomain: "e-comtemplate.firebaseapp.com",
  projectId: "e-comtemplate",
  storageBucket: "e-comtemplate.firebasestorage.app",
  messagingSenderId: "16424685607",
  appId: "1:16424685607:web:c51e7f674f92e9999abe02"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private _app = initializeApp(firebaseConfig)
  get app(){
    return this._app;
  }

  private _auth = getAuth(this._app)
  get auth(){
    return this._auth;
  }

  private _db = getFirestore(this._app)
  get db(){
    return this._db;
  }

  constructor() { }
}
