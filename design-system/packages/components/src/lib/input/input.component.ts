import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class DsInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  onInput(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
