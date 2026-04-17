export { DsCardComponent, DsFeatureCardComponent, DsFooterComponent, DsHeroComponent, DsInputComponent, DsLinkCardComponent, DsNavbarComponent } from '@jablonowski/components';
import * as i0 from '@angular/core';
import { Input, Component } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

class DsButtonComponent {
    variant = 'primary';
    disabled = false;
    type = 'button';
    icon;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsButtonComponent, isStandalone: true, selector: "ds-button", inputs: { variant: "variant", disabled: "disabled", type: "type", icon: "icon" }, ngImport: i0, template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  @if (icon) {\n    <mat-icon class=\"btn-icon\">{{ icon }}</mat-icon>\n  }\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--ds-font-family-base, sans-serif);border-radius:var(--ds-border-radius-full, 9999px);padding:0 2rem;text-transform:uppercase;letter-spacing:.05em;font-weight:var(--ds-font-weight-semibold, 600);font-size:var(--ds-font-size-sm, .875rem);transition:box-shadow .2s ease,transform .15s ease}button:hover:not(:disabled){box-shadow:var(--ds-elevation-md, 0 4px 12px rgba(0, 0, 0, .15));transform:translateY(-1px)}button:active:not(:disabled){transform:translateY(0)}.btn-icon{margin-right:.5rem;font-size:18px;width:18px;height:18px;vertical-align:middle}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-button', standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule], template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  @if (icon) {\n    <mat-icon class=\"btn-icon\">{{ icon }}</mat-icon>\n  }\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--ds-font-family-base, sans-serif);border-radius:var(--ds-border-radius-full, 9999px);padding:0 2rem;text-transform:uppercase;letter-spacing:.05em;font-weight:var(--ds-font-weight-semibold, 600);font-size:var(--ds-font-size-sm, .875rem);transition:box-shadow .2s ease,transform .15s ease}button:hover:not(:disabled){box-shadow:var(--ds-elevation-md, 0 4px 12px rgba(0, 0, 0, .15));transform:translateY(-1px)}button:active:not(:disabled){transform:translateY(0)}.btn-icon{margin-right:.5rem;font-size:18px;width:18px;height:18px;vertical-align:middle}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class NgBankPromoBarComponent {
    icon = 'campaign';
    message = '';
    linkText = '';
    variant = 'primary';
    dismissible = true;
    visible = true;
    dismiss() {
        this.visible = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: NgBankPromoBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: NgBankPromoBarComponent, isStandalone: true, selector: "ng-promo-bar", inputs: { icon: "icon", message: "message", linkText: "linkText", variant: "variant", dismissible: "dismissible" }, ngImport: i0, template: "@if (visible) {\n  <div class=\"promo-bar\" [class]=\"'promo-bar--' + variant\">\n    <div class=\"promo-bar__content\">\n      <mat-icon class=\"promo-bar__icon\">{{ icon }}</mat-icon>\n      <span class=\"promo-bar__message\">{{ message }}</span>\n      @if (linkText) {\n        <a class=\"promo-bar__link\">{{ linkText }}</a>\n      }\n    </div>\n    @if (dismissible) {\n      <button class=\"promo-bar__close\" (click)=\"dismiss()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    }\n  </div>\n}\n", styles: [":host{display:block}.promo-bar{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.5rem;font-family:var(--ds-font-family-base, sans-serif);font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-medium, 500);animation:slideDown .3s ease}.promo-bar--primary{background-color:var(--ds-color-primary-base, #ff6200);color:#fff}.promo-bar--accent{background-color:var(--ds-color-secondary-500, #525199);color:#fff}.promo-bar--info{background-color:var(--ds-color-info-light, #e3f2fd);color:var(--ds-color-text-primary, #1a1a1a)}.promo-bar__content{display:flex;align-items:center;gap:.75rem;flex:1}.promo-bar__icon{font-size:20px;width:20px;height:20px}.promo-bar__message{flex:1}.promo-bar__link{text-decoration:underline;cursor:pointer;white-space:nowrap;font-weight:var(--ds-font-weight-semibold, 600)}.promo-bar__link:hover{opacity:.85}.promo-bar__close{background:none;border:none;color:inherit;cursor:pointer;padding:.25rem;display:flex;align-items:center;opacity:.7;transition:opacity .15s}.promo-bar__close:hover{opacity:1}.promo-bar__close mat-icon{font-size:18px;width:18px;height:18px}@keyframes slideDown{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: NgBankPromoBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-promo-bar', standalone: true, imports: [CommonModule, MatIconModule], template: "@if (visible) {\n  <div class=\"promo-bar\" [class]=\"'promo-bar--' + variant\">\n    <div class=\"promo-bar__content\">\n      <mat-icon class=\"promo-bar__icon\">{{ icon }}</mat-icon>\n      <span class=\"promo-bar__message\">{{ message }}</span>\n      @if (linkText) {\n        <a class=\"promo-bar__link\">{{ linkText }}</a>\n      }\n    </div>\n    @if (dismissible) {\n      <button class=\"promo-bar__close\" (click)=\"dismiss()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    }\n  </div>\n}\n", styles: [":host{display:block}.promo-bar{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.5rem;font-family:var(--ds-font-family-base, sans-serif);font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-medium, 500);animation:slideDown .3s ease}.promo-bar--primary{background-color:var(--ds-color-primary-base, #ff6200);color:#fff}.promo-bar--accent{background-color:var(--ds-color-secondary-500, #525199);color:#fff}.promo-bar--info{background-color:var(--ds-color-info-light, #e3f2fd);color:var(--ds-color-text-primary, #1a1a1a)}.promo-bar__content{display:flex;align-items:center;gap:.75rem;flex:1}.promo-bar__icon{font-size:20px;width:20px;height:20px}.promo-bar__message{flex:1}.promo-bar__link{text-decoration:underline;cursor:pointer;white-space:nowrap;font-weight:var(--ds-font-weight-semibold, 600)}.promo-bar__link:hover{opacity:.85}.promo-bar__close{background:none;border:none;color:inherit;cursor:pointer;padding:.25rem;display:flex;align-items:center;opacity:.7;transition:opacity .15s}.promo-bar__close:hover{opacity:1}.promo-bar__close mat-icon{font-size:18px;width:18px;height:18px}@keyframes slideDown{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], message: [{
                type: Input
            }], linkText: [{
                type: Input
            }], variant: [{
                type: Input
            }], dismissible: [{
                type: Input
            }] } });

// Re-export all shared components

/**
 * Generated bundle index. Do not edit.
 */

export { DsButtonComponent, NgBankPromoBarComponent };
//# sourceMappingURL=jablonowski-components-ng-bank.mjs.map
