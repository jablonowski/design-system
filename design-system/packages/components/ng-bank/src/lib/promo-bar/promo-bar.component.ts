import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ng-promo-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './promo-bar.component.html',
  styleUrls: ['./promo-bar.component.scss'],
})
export class NgBankPromoBarComponent {
  @Input() icon = 'campaign';
  @Input() message = '';
  @Input() linkText = '';
  @Input() variant: 'primary' | 'accent' | 'info' = 'primary';
  @Input() dismissible = true;

  visible = true;

  dismiss(): void {
    this.visible = false;
  }
}
