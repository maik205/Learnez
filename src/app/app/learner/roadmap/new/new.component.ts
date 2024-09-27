import {
  Roadmap,
  RoadmapSkill,
} from './../../../../services/interfaces/roadmap.interface';
import { AuthService } from './../../../../services/auth.service';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import {
  Functions,
  getFunctions,
  httpsCallable,
  HttpsCallableResult,
} from '@angular/fire/functions';
import { fieldToCategoryMap } from '../../../../services/constants';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { addDoc, collection, doc, getFirestore } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatRadioModule,
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewRoadmapComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  public educationLevel: string = '';
  public field: string = 'Computer Science';
  public topicOfInterest: string = '';
  public interestedCategories: string[] = [];
  public skills: RoadmapSkill[] = [
    {
      skillName: 'Problem Solving',
      skillDescription:
        'The ability to identify and analyze problems, break them down into smaller parts, and develop solutions.',
      relatedCategories: [],
    },
    {
      skillName: 'Logical Thinking',
      skillDescription:
        'The ability to reason systematically and use logic to solve problems and make decisions.',
      relatedCategories: [],
    },
    {
      skillName: 'Computational Thinking',
      skillDescription:
        'The ability to think like a computer, using concepts such as algorithms, data structures, and automation.',
      relatedCategories: [],
    },
    {
      skillName: 'Basic Programming Concepts',
      skillDescription:
        'Understanding of fundamental programming concepts, such as variables, data types, loops, conditional statements, and functions.',
      relatedCategories: [],
    },
    {
      skillName: 'Python',
      skillDescription:
        'A versatile programming language that is widely used in various fields, including data science and web development.',
      relatedCategories: [],
    },
    {
      skillName: 'JavaScript',
      skillDescription:
        'A language used for web development, creating interactive elements and user interfaces.',
      relatedCategories: [],
    },
    {
      skillName: 'HTML & CSS',
      skillDescription:
        'Languages used to create the structure and styling of web pages.',
      relatedCategories: [],
    },
    {
      skillName: 'Data Structures',
      skillDescription:
        'Understanding of common data structures such as arrays, lists, stacks, queues, and dictionaries.',
      relatedCategories: [],
    },
    {
      skillName: 'Algorithms',
      skillDescription:
        'Understanding of common algorithms used to solve problems efficiently, such as sorting, searching, and graph traversal.',
      relatedCategories: [],
    },
    {
      skillName: 'Cybersecurity Fundamentals',
      skillDescription:
        'Understanding of basic cybersecurity concepts, such as threats, vulnerabilities, and security measures.',
      relatedCategories: [],
    },
    {
      skillName: 'Network Security',
      skillDescription:
        'Understanding of how networks operate and common security risks and mitigation techniques.',
      relatedCategories: [],
    },
    {
      skillName: 'Data Privacy & Security',
      skillDescription:
        'Understanding of data privacy regulations and best practices for securing sensitive information.',
      relatedCategories: [],
    },
    {
      skillName: 'Machine Learning Basics',
      skillDescription:
        'Introduction to machine learning concepts, such as supervised learning, unsupervised learning, and deep learning.',
      relatedCategories: [],
    },
    {
      skillName: 'Data Analysis',
      skillDescription:
        'The ability to collect, clean, and analyze data to identify patterns and insights.',
      relatedCategories: [],
    },
    {
      skillName: 'Data Visualization',
      skillDescription:
        'The ability to create visual representations of data to communicate insights effectively.',
      relatedCategories: [],
    },
    {
      skillName: 'SQL',
      skillDescription:
        'A language used to interact with relational databases, performing operations like querying, inserting, updating, and deleting data.',
      relatedCategories: [],
    },
    {
      skillName: 'Database Design',
      skillDescription:
        'Understanding of database design principles and best practices for creating efficient and scalable databases.',
      relatedCategories: [],
    },
    {
      skillName: 'Data Modeling',
      skillDescription:
        'The ability to represent data relationships and structures using diagrams and models.',
      relatedCategories: [],
    },
    {
      skillName: 'Project Management',
      skillDescription:
        'The ability to plan, organize, and execute projects effectively, involving collaboration and communication.',
      relatedCategories: [],
    },
    {
      skillName: 'Teamwork & Collaboration',
      skillDescription:
        'The ability to work effectively with others, communicate ideas clearly, and contribute to a shared goal.',
      relatedCategories: [],
    },
    {
      skillName: 'Communication Skills',
      skillDescription:
        'The ability to communicate ideas clearly and concisely, both verbally and in writing.',
      relatedCategories: [],
    },
    {
      skillName: 'Critical Thinking',
      skillDescription:
        'The ability to analyze information, evaluate arguments, and form judgments.',
      relatedCategories: [],
    },
    {
      skillName: 'Creativity & Innovation',
      skillDescription:
        'The ability to generate new ideas and solutions to problems.',
      relatedCategories: [],
    },
    {
      skillName: 'Adaptability & Learning',
      skillDescription:
        'The ability to learn new skills and technologies quickly and adapt to changing environments.',
      relatedCategories: [],
    },
  ];
  public isWorking: boolean = false;
  public topicsOfInterest: { [key: string]: string[] } = {
    'Computer Science': [
      'Web Development',
      'Mobile Development',
      'Data Science',
      'Cybersecurity',
      'Machine Learning',
      'Artificial Intelligence',
    ],

    Business: [
      'Entrepreneurship',
      'Marketing',
      'Finance',
      'Accounting',
      'Management',
      'Human Resources',
    ],

    Health: [
      'Nutrition',
      'Fitness',
      'Mental Health',
      'Medicine',
      'Public Health',
      'Nursing',
    ],

    Art: [
      'Drawing',
      'Painting',
      'Photography',
      'Graphic Design',
      'Sculpture',
      'Music',
    ],
  };
  @ViewChild('mainStepper') mainStepper!: MatStepper;
  private cloudFn = inject(Functions);

  public async getSkillsSuggestions() {
    this.mainStepper.next();
    this.isWorking = true;
    const result = await this.generateSkillSuggestions();
    console.log(result);
    this.skills = result.data;
    this.isWorking = false;
  }
  generateSkillSuggestions(): Promise<HttpsCallableResult<RoadmapSkill[]>> {
    console.log(this.interestedCategories);
    return httpsCallable<
      { educationalLevel: string; field: string; categories: string[] },
      RoadmapSkill[]
    >(
      getFunctions(),
      'skillSuggestionFlow'
    )({
      educationalLevel: this.educationLevel,
      field: this.field,
      categories: this.interestedCategories,
    });
  }

  generateRoadmap(skill: RoadmapSkill): Promise<HttpsCallableResult<Roadmap>> {
    return httpsCallable<RoadmapSkill, Roadmap>(
      getFunctions(),
      'roadmapSuggestionFlow'
    )(skill);
  }

  public getCategories(): string[] {
    return fieldToCategoryMap[this.field];
  }

  public async getRoadmap(skill: RoadmapSkill) {
    this.isWorking = true;
    const result = await this.generateRoadmap(skill);
    if (result.data) {
      const coll = collection(
        getFirestore(),
        'roadmaps',
        'users',
        (await firstValueFrom(this.authService.user))!.uid
      );
      const docref = await addDoc(coll, result.data);
      console.log(result.data);
      this.router.navigate(['/app/learner/roadmap/view/' + docref.id], );
    }
  }
}
