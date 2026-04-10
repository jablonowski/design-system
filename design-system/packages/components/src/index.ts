import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button';
import { InputComponent } from './input';
import { CardComponent } from './card';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    CardComponent
  ]
})
export class ComponentsModule { }