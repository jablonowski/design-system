import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ds-feature-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class DsFeatureCardComponent {
  @Input() icon = '';
  @Input() heading = '';
  @Input() description = '';
  @Input() linkText = '';
}
