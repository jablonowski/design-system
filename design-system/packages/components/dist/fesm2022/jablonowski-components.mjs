import * as i0 from '@angular/core';
import { Input, Component, EventEmitter, Output } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as i1$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

class DsButtonComponent {
    variant = 'primary';
    disabled = false;
    type = 'button';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: DsButtonComponent, isStandalone: true, selector: "ds-button", inputs: { variant: "variant", disabled: "disabled", type: "type" }, ngImport: i0, template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--font-family-base);border-radius:var(--border-radius-md)}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-button', standalone: true, imports: [MatButtonModule], template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--font-family-base);border-radius:var(--border-radius-md)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class DsInputComponent {
    label = '';
    placeholder = '';
    value = '';
    type = 'text';
    disabled = false;
    valueChange = new EventEmitter();
    onInput(value) {
        this.value = value;
        this.valueChange.emit(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: DsInputComponent, isStandalone: true, selector: "ds-input", inputs: { label: "label", placeholder: "placeholder", value: "value", type: "type", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label }}</mat-label>\n  <input\n    matInput\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    (input)=\"onInput($any($event.target).value)\"\n  />\n</mat-form-field>\n", styles: [":host{display:block}mat-form-field{width:100%;font-family:var(--font-family-base)}\n"], dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i1$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-input', standalone: true, imports: [MatInputModule, MatFormFieldModule, FormsModule], template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label }}</mat-label>\n  <input\n    matInput\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    (input)=\"onInput($any($event.target).value)\"\n  />\n</mat-form-field>\n", styles: [":host{display:block}mat-form-field{width:100%;font-family:var(--font-family-base)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], type: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class DsCardComponent {
    title = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsCardComponent, isStandalone: true, selector: "ds-card", inputs: { title: "title" }, ngImport: i0, template: "<mat-card>\n  @if (title) {\n    <mat-card-header>\n      <mat-card-title>{{ title }}</mat-card-title>\n    </mat-card-header>\n  }\n  <mat-card-content>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}mat-card{font-family:var(--font-family-base);border-radius:var(--border-radius-md);box-shadow:var(--elevation-sm)}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1$2.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1$2.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1$2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-card', standalone: true, imports: [MatCardModule], template: "<mat-card>\n  @if (title) {\n    <mat-card-header>\n      <mat-card-title>{{ title }}</mat-card-title>\n    </mat-card-header>\n  }\n  <mat-card-content>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}mat-card{font-family:var(--font-family-base);border-radius:var(--border-radius-md);box-shadow:var(--elevation-sm)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { DsButtonComponent, DsCardComponent, DsInputComponent };
//# sourceMappingURL=jablonowski-components.mjs.map
