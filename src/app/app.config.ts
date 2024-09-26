import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"learnez-40989","appId":"1:777811325996:web:7bde7c83d665b80243cd89","storageBucket":"learnez-40989.appspot.com","apiKey":"AIzaSyAf-gYVyR3ASxNKjobwjn7Ea3Gs86fTbcY","authDomain":"learnez-40989.firebaseapp.com","messagingSenderId":"777811325996","measurementId":"G-1HFH91Y2TM"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideVertexAI(() => getVertexAI())]
};
