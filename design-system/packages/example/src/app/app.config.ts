import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  apiUrl: string = 'https://api.example.com';
  appTitle: string = 'Design System Example';
  theme: string = 'light'; // or 'dark'
}