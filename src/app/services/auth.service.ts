import { Injectable, OnDestroy, Optional } from '@angular/core';
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
export class AuthService implements OnDestroy {
  isLoggedIn: boolean = false;
  private readonly userDisposable: Subscription | undefined;
  public readonly user: Observable<User | null> = EMPTY;

  constructor(@Optional() private auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth)
        .pipe(
          traceUntilFirst('auth'),
          map((u) => !!u)
        )
        .subscribe((isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
        });
    }
  }
  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async login(username: string, password: string, ifKeepLogin: boolean) {
    const perisistence =
      ifKeepLogin == true ? browserLocalPersistence : browserSessionPersistence;
    return await signInWithEmailAndPassword(this.auth, username, password)
      .then(async (res) => {
        await setPersistence(this.auth, perisistence);
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch((err) => {
        this.isLoggedIn = false;
        localStorage.removeItem('user');
        throw err;
      });
  }

  logout() {
    this.auth.signOut();
    window.location.reload();
    localStorage.removeItem('user');
  }
  async register(email: string, password: string) {
    let cred = await createUserWithEmailAndPassword(this.auth, email, password);
    return cred;
  }
}
