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
  NgBankPromoBarComponent,
} from '@jablonowski/components/ng-bank';
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
    NgBankPromoBarComponent,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
