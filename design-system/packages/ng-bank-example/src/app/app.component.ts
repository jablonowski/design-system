import { Component } from '@angular/core';
import {
  DsButtonComponent,
  DsInputComponent,
  DsCardComponent,
  DsNavbarComponent,
  DsHeroComponent,
  DsFeatureCardComponent,
  DsLinkCardComponent,
  DsFooterComponent,
} from '@jablonowski/components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DsButtonComponent,
    DsInputComponent,
    DsCardComponent,
    DsNavbarComponent,
    DsHeroComponent,
    DsFeatureCardComponent,
    DsLinkCardComponent,
    DsFooterComponent,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
