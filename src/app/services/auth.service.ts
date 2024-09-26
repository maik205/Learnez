import {
  inject,
  Injectable,
  OnDestroy,
  Optional,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import {
  Auth,
  authState,
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { setPersistence, User } from '@firebase/auth';
import { EMPTY, map, Observable, Subscription } from 'rxjs';
import { traceUntilFirst } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  private readonly userDisposable: Subscription | undefined;
  public readonly user: WritableSignal<User | null> = signal(null);
  private auth = inject(Auth);
  constructor() {
    this.user = authState(this.auth);
  }

  async login(username: string, password: string, ifKeepLogin: boolean) {
    const perisistence =
      ifKeepLogin == true ? browserLocalPersistence : browserSessionPersistence;
    return await signInWithEmailAndPassword(this.auth, username, password)
      .then(async () => {
        await setPersistence(this.auth, perisistence);
        this.isLoggedIn = true;
      })
      .catch((err) => {
        this.isLoggedIn = false;
        throw err;
      });
  }

  logout() {
    this.auth.signOut();
    window.location.reload();
  }
  async register(email: string, password: string) {
    let cred = await createUserWithEmailAndPassword(this.auth, email, password);
    return cred;
  }
}
