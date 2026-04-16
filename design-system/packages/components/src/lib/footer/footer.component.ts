import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'ds-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class DsFooterComponent {
  @Input() companyName = '';
  @Input() year = new Date().getFullYear();
}
