import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user = signal <User | null>(null)

  firebaseService = inject(FirebaseService)

  login(email: string, password: string){
    return signInWithEmailAndPassword(this.firebaseService.auth, email, password)
  }

  logout(){
    return signOut(this.firebaseService.auth)
  }
  constructor() { 
    onAuthStateChanged(this.firebaseService.auth, async (user) => {
      if(!user){
        this.user.set(null)
        return
      }
      const user = await this.getUserInfo(user.uid)
      this.user.set(user)
    })
  } 

  async getUserInfo(uid: string): Promise <User | null> {
    const userRef = doc(this.firebaseService.db, 'users', uid)
    const userDoc = await getDoc(userRef)

    if(!userDoc.exists()){
      return null
    }

    return userDoc.data() as User;
  }
}
