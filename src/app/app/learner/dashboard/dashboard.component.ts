import { Component, inject, OnInit } from '@angular/core';
import { Roadmap } from '../../../services/interfaces/roadmap.interface';
import { AuthService } from '../../../services/auth.service';
import {
  collection,
  collectionData,
  getFirestore,
} from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent{

}
