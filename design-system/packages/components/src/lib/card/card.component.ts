import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class DsCardComponent {
  @Input() title = '';
}
