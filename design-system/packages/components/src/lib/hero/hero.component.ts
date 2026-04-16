import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ds-hero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class DsHeroComponent {
  @Input() heading = '';
  @Input() subtitle = '';
}
