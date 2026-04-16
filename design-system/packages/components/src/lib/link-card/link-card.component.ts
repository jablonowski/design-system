import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ds-link-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule],
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class DsLinkCardComponent {
  @Input() icon = '';
  @Input() heading = '';
  @Input() description = '';
}
