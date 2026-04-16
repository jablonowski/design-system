import * as i0 from '@angular/core';
import { Input, Component, EventEmitter, Output, HostListener } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import * as i1$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1$3 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';

class DsButtonComponent {
    variant = 'primary';
    disabled = false;
    type = 'button';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: DsButtonComponent, isStandalone: true, selector: "ds-button", inputs: { variant: "variant", disabled: "disabled", type: "type" }, ngImport: i0, template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--ds-font-family-base);border-radius:var(--ds-border-radius-md)}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-button', standalone: true, imports: [MatButtonModule], template: "<button\n  mat-flat-button\n  [color]=\"variant\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:inline-block}button{font-family:var(--ds-font-family-base);border-radius:var(--ds-border-radius-md)}\n"] }]
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
    multiline = false;
    rows = 4;
    valueChange = new EventEmitter();
    onInput(value) {
        this.value = value;
        this.valueChange.emit(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsInputComponent, isStandalone: true, selector: "ds-input", inputs: { label: "label", placeholder: "placeholder", value: "value", type: "type", disabled: "disabled", multiline: "multiline", rows: "rows" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label }}</mat-label>\n  @if (multiline) {\n    <textarea\n      matInput\n      [rows]=\"rows\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n    ></textarea>\n  } @else {\n    <input\n      matInput\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n    />\n  }\n</mat-form-field>\n", styles: [":host{display:block}mat-form-field{width:100%;font-family:var(--ds-font-family-base)}\n"], dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i1$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1$1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-input', standalone: true, imports: [MatInputModule, MatFormFieldModule, FormsModule], template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label }}</mat-label>\n  @if (multiline) {\n    <textarea\n      matInput\n      [rows]=\"rows\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n    ></textarea>\n  } @else {\n    <input\n      matInput\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n    />\n  }\n</mat-form-field>\n", styles: [":host{display:block}mat-form-field{width:100%;font-family:var(--ds-font-family-base)}\n"] }]
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
            }], multiline: [{
                type: Input
            }], rows: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class DsCardComponent {
    title = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsCardComponent, isStandalone: true, selector: "ds-card", inputs: { title: "title" }, ngImport: i0, template: "<mat-card>\n  @if (title) {\n    <mat-card-header>\n      <mat-card-title>{{ title }}</mat-card-title>\n    </mat-card-header>\n  }\n  <mat-card-content>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}mat-card{font-family:var(--ds-font-family-base);border-radius:var(--ds-border-radius-md);border-left:4px solid var(--ds-color-neutral-300, #e0e0e0);box-shadow:var(--ds-elevation-sm);transition:border-color .2s ease}mat-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e)}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1$2.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1$2.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1$2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-card', standalone: true, imports: [MatCardModule], template: "<mat-card>\n  @if (title) {\n    <mat-card-header>\n      <mat-card-title>{{ title }}</mat-card-title>\n    </mat-card-header>\n  }\n  <mat-card-content>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}mat-card{font-family:var(--ds-font-family-base);border-radius:var(--ds-border-radius-md);border-left:4px solid var(--ds-color-neutral-300, #e0e0e0);box-shadow:var(--ds-elevation-sm);transition:border-color .2s ease}mat-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

class DsNavbarComponent {
    brand = '';
    sticky = true;
    isSticky = false;
    activeMenu = null;
    onScroll() {
        this.isSticky = this.sticky && window.scrollY > 0;
    }
    toggleMenu(name) {
        this.activeMenu = this.activeMenu === name ? null : name;
    }
    closeMenu() {
        this.activeMenu = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsNavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsNavbarComponent, isStandalone: true, selector: "ds-navbar", inputs: { brand: "brand", sticky: "sticky" }, host: { listeners: { "window:scroll": "onScroll()" }, properties: { "class.sticky": "isSticky" } }, ngImport: i0, template: "<header class=\"navbar-wrapper\">\n  <div class=\"navbar-bar\">\n    <div class=\"navbar-container\">\n      <span class=\"brand\">{{ brand }}</span>\n      <nav class=\"nav-links\">\n        <ng-content select=\"[navLinks]\"></ng-content>\n      </nav>\n      <span class=\"spacer\"></span>\n      <div class=\"nav-actions\">\n        <ng-content select=\"[navActions]\"></ng-content>\n      </div>\n    </div>\n  </div>\n\n  <!-- Mega-menu dropdown panel -->\n  @if (activeMenu) {\n    <div class=\"mega-menu-backdrop\" (click)=\"closeMenu()\"></div>\n    <div class=\"mega-menu-panel\">\n      <div class=\"mega-menu-content\">\n        <ng-content select=\"[megaMenu]\"></ng-content>\n      </div>\n    </div>\n  }\n</header>\n", styles: [":host{display:block;position:relative;z-index:1000}:host.sticky .navbar-wrapper{position:fixed;top:0;left:0;right:0;box-shadow:0 2px 8px #0000001f}.navbar-wrapper{position:relative;z-index:1000;transition:box-shadow .2s ease}.navbar-bar{background-color:var(--ds-color-primary-base, #003b7e);color:#fff;font-family:var(--ds-font-family-base, \"Roboto\", sans-serif)}.navbar-container{display:flex;align-items:center;height:56px;max-width:1100px;margin:0 auto;padding:0 1.5rem}.brand{font-weight:700;font-size:1.25rem;margin-right:2rem;white-space:nowrap}.nav-links{display:flex;align-items:center;gap:0}.nav-links ::ng-deep button,.nav-links ::ng-deep a{color:#fff!important}.nav-links ::ng-deep button .mat-icon,.nav-links ::ng-deep a .mat-icon{color:#fff}.spacer{flex:1 1 auto}.nav-actions{display:flex;align-items:center;gap:.5rem}.mega-menu-backdrop{position:fixed;inset:0;z-index:998}.mega-menu-panel{position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;box-shadow:0 8px 24px #0000001f;border-top:3px solid var(--ds-color-primary-base, #003b7e);animation:slideDown .2s ease}.mega-menu-content{max-width:1100px;margin:0 auto;padding:2rem}@keyframes slideDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatIconModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsNavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-navbar', standalone: true, imports: [MatButtonModule, MatIconModule], host: {
                        '[class.sticky]': 'isSticky',
                    }, template: "<header class=\"navbar-wrapper\">\n  <div class=\"navbar-bar\">\n    <div class=\"navbar-container\">\n      <span class=\"brand\">{{ brand }}</span>\n      <nav class=\"nav-links\">\n        <ng-content select=\"[navLinks]\"></ng-content>\n      </nav>\n      <span class=\"spacer\"></span>\n      <div class=\"nav-actions\">\n        <ng-content select=\"[navActions]\"></ng-content>\n      </div>\n    </div>\n  </div>\n\n  <!-- Mega-menu dropdown panel -->\n  @if (activeMenu) {\n    <div class=\"mega-menu-backdrop\" (click)=\"closeMenu()\"></div>\n    <div class=\"mega-menu-panel\">\n      <div class=\"mega-menu-content\">\n        <ng-content select=\"[megaMenu]\"></ng-content>\n      </div>\n    </div>\n  }\n</header>\n", styles: [":host{display:block;position:relative;z-index:1000}:host.sticky .navbar-wrapper{position:fixed;top:0;left:0;right:0;box-shadow:0 2px 8px #0000001f}.navbar-wrapper{position:relative;z-index:1000;transition:box-shadow .2s ease}.navbar-bar{background-color:var(--ds-color-primary-base, #003b7e);color:#fff;font-family:var(--ds-font-family-base, \"Roboto\", sans-serif)}.navbar-container{display:flex;align-items:center;height:56px;max-width:1100px;margin:0 auto;padding:0 1.5rem}.brand{font-weight:700;font-size:1.25rem;margin-right:2rem;white-space:nowrap}.nav-links{display:flex;align-items:center;gap:0}.nav-links ::ng-deep button,.nav-links ::ng-deep a{color:#fff!important}.nav-links ::ng-deep button .mat-icon,.nav-links ::ng-deep a .mat-icon{color:#fff}.spacer{flex:1 1 auto}.nav-actions{display:flex;align-items:center;gap:.5rem}.mega-menu-backdrop{position:fixed;inset:0;z-index:998}.mega-menu-panel{position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;box-shadow:0 8px 24px #0000001f;border-top:3px solid var(--ds-color-primary-base, #003b7e);animation:slideDown .2s ease}.mega-menu-content{max-width:1100px;margin:0 auto;padding:2rem}@keyframes slideDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], propDecorators: { brand: [{
                type: Input
            }], sticky: [{
                type: Input
            }], onScroll: [{
                type: HostListener,
                args: ['window:scroll']
            }] } });

class DsHeroComponent {
    heading = '';
    subtitle = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsHeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsHeroComponent, isStandalone: true, selector: "ds-hero", inputs: { heading: "heading", subtitle: "subtitle" }, ngImport: i0, template: "<section class=\"hero\">\n  <div class=\"hero-container\">\n    <div class=\"hero-content\">\n      <h1>{{ heading }}</h1>\n      @if (subtitle) {\n        <p class=\"subtitle\">{{ subtitle }}</p>\n      }\n      <div class=\"hero-body\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"hero-actions\">\n        <ng-content select=\"[heroActions]\"></ng-content>\n      </div>\n    </div>\n    <div class=\"hero-visual\">\n      <ng-content select=\"[heroVisual]\"></ng-content>\n    </div>\n  </div>\n</section>\n", styles: ["@charset \"UTF-8\";:host{display:block}.hero{background:linear-gradient(135deg,var(--ds-color-primary-base, #003b7e) 0%,var(--ds-color-primary-dark, #002a5c) 100%);color:#fff;min-height:320px}.hero-container{display:flex;align-items:center;gap:3rem;max-width:1100px;margin:0 auto;padding:3rem 1.5rem}.hero-content{flex:1;max-width:600px}h1{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);font-size:var(--ds-font-size-3xl, 2rem);font-weight:var(--ds-font-weight-bold, 700);margin:0 0 1rem;line-height:1.2}.subtitle{font-size:var(--ds-font-size-lg, 1.125rem);opacity:.9;margin-bottom:1.5rem}.hero-body{margin-bottom:2rem}.hero-body ::ng-deep ul{list-style:none;padding:0;margin:0}.hero-body ::ng-deep ul li{position:relative;padding-left:1.5rem;margin-bottom:.75rem;font-size:var(--ds-font-size-base, 1rem);line-height:1.5}.hero-body ::ng-deep ul li:before{content:\"\\2713\";position:absolute;left:0;color:var(--ds-color-success-base, #2e7d32);font-weight:700}.hero-actions{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.hero-visual{flex:0 0 auto;display:flex;align-items:center;justify-content:center}.hero-visual ::ng-deep mat-icon{font-size:160px;width:160px;height:160px;opacity:.15}.hero-visual ::ng-deep img{max-width:400px;width:100%;border-radius:var(--ds-border-radius-md, 8px);box-shadow:0 8px 32px #00000040;object-fit:cover}@media(max-width:768px){.hero-container{flex-direction:column;text-align:center;padding:2rem 1rem}.hero-actions{justify-content:center}.hero-visual{display:none}}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatIconModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsHeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-hero', standalone: true, imports: [MatButtonModule, MatIconModule], template: "<section class=\"hero\">\n  <div class=\"hero-container\">\n    <div class=\"hero-content\">\n      <h1>{{ heading }}</h1>\n      @if (subtitle) {\n        <p class=\"subtitle\">{{ subtitle }}</p>\n      }\n      <div class=\"hero-body\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"hero-actions\">\n        <ng-content select=\"[heroActions]\"></ng-content>\n      </div>\n    </div>\n    <div class=\"hero-visual\">\n      <ng-content select=\"[heroVisual]\"></ng-content>\n    </div>\n  </div>\n</section>\n", styles: ["@charset \"UTF-8\";:host{display:block}.hero{background:linear-gradient(135deg,var(--ds-color-primary-base, #003b7e) 0%,var(--ds-color-primary-dark, #002a5c) 100%);color:#fff;min-height:320px}.hero-container{display:flex;align-items:center;gap:3rem;max-width:1100px;margin:0 auto;padding:3rem 1.5rem}.hero-content{flex:1;max-width:600px}h1{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);font-size:var(--ds-font-size-3xl, 2rem);font-weight:var(--ds-font-weight-bold, 700);margin:0 0 1rem;line-height:1.2}.subtitle{font-size:var(--ds-font-size-lg, 1.125rem);opacity:.9;margin-bottom:1.5rem}.hero-body{margin-bottom:2rem}.hero-body ::ng-deep ul{list-style:none;padding:0;margin:0}.hero-body ::ng-deep ul li{position:relative;padding-left:1.5rem;margin-bottom:.75rem;font-size:var(--ds-font-size-base, 1rem);line-height:1.5}.hero-body ::ng-deep ul li:before{content:\"\\2713\";position:absolute;left:0;color:var(--ds-color-success-base, #2e7d32);font-weight:700}.hero-actions{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.hero-visual{flex:0 0 auto;display:flex;align-items:center;justify-content:center}.hero-visual ::ng-deep mat-icon{font-size:160px;width:160px;height:160px;opacity:.15}.hero-visual ::ng-deep img{max-width:400px;width:100%;border-radius:var(--ds-border-radius-md, 8px);box-shadow:0 8px 32px #00000040;object-fit:cover}@media(max-width:768px){.hero-container{flex-direction:column;text-align:center;padding:2rem 1rem}.hero-actions{justify-content:center}.hero-visual{display:none}}\n"] }]
        }], propDecorators: { heading: [{
                type: Input
            }], subtitle: [{
                type: Input
            }] } });

class DsFeatureCardComponent {
    icon = '';
    heading = '';
    description = '';
    linkText = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsFeatureCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsFeatureCardComponent, isStandalone: true, selector: "ds-feature-card", inputs: { icon: "icon", heading: "heading", description: "description", linkText: "linkText" }, ngImport: i0, template: "<mat-card class=\"feature-card\" appearance=\"outlined\">\n  <mat-card-content>\n    @if (icon) {\n      <div class=\"icon-wrapper\">\n        <mat-icon>{{ icon }}</mat-icon>\n      </div>\n    }\n    <h3 class=\"card-heading\">{{ heading }}</h3>\n    <p class=\"card-description\">{{ description }}</p>\n    @if (linkText) {\n      <a class=\"card-link\">{{ linkText }} \u2192</a>\n    }\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}.feature-card{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);border-radius:var(--ds-border-radius-md, 8px);border-left:4px solid var(--ds-color-neutral-300, #e0e0e0);transition:box-shadow .2s ease,transform .2s ease,border-color .2s ease;height:100%;cursor:default}.feature-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e);box-shadow:var(--ds-elevation-md, 0 4px 12px rgba(0, 0, 0, .15));transform:translateY(-2px)}.icon-wrapper{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background-color:var(--ds-color-primary-light, #e3f2fd);margin-bottom:1rem}.icon-wrapper mat-icon{font-size:28px;width:28px;height:28px;color:var(--ds-color-primary-base, #003b7e)}.card-heading{font-size:var(--ds-font-size-lg, 1.125rem);font-weight:var(--ds-font-weight-semibold, 600);color:var(--ds-color-text-primary, #212121);margin:0 0 .5rem}.card-description{font-size:var(--ds-font-size-sm, .875rem);color:var(--ds-color-text-secondary, #616161);line-height:1.6;margin:0 0 1rem}.card-link{display:inline-block;font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-medium, 500);color:var(--ds-color-primary-base, #003b7e);text-decoration:none;cursor:pointer}.card-link:hover{text-decoration:underline}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1$2.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatButtonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsFeatureCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-feature-card', standalone: true, imports: [MatCardModule, MatIconModule, MatButtonModule], template: "<mat-card class=\"feature-card\" appearance=\"outlined\">\n  <mat-card-content>\n    @if (icon) {\n      <div class=\"icon-wrapper\">\n        <mat-icon>{{ icon }}</mat-icon>\n      </div>\n    }\n    <h3 class=\"card-heading\">{{ heading }}</h3>\n    <p class=\"card-description\">{{ description }}</p>\n    @if (linkText) {\n      <a class=\"card-link\">{{ linkText }} \u2192</a>\n    }\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}.feature-card{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);border-radius:var(--ds-border-radius-md, 8px);border-left:4px solid var(--ds-color-neutral-300, #e0e0e0);transition:box-shadow .2s ease,transform .2s ease,border-color .2s ease;height:100%;cursor:default}.feature-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e);box-shadow:var(--ds-elevation-md, 0 4px 12px rgba(0, 0, 0, .15));transform:translateY(-2px)}.icon-wrapper{display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background-color:var(--ds-color-primary-light, #e3f2fd);margin-bottom:1rem}.icon-wrapper mat-icon{font-size:28px;width:28px;height:28px;color:var(--ds-color-primary-base, #003b7e)}.card-heading{font-size:var(--ds-font-size-lg, 1.125rem);font-weight:var(--ds-font-weight-semibold, 600);color:var(--ds-color-text-primary, #212121);margin:0 0 .5rem}.card-description{font-size:var(--ds-font-size-sm, .875rem);color:var(--ds-color-text-secondary, #616161);line-height:1.6;margin:0 0 1rem}.card-link{display:inline-block;font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-medium, 500);color:var(--ds-color-primary-base, #003b7e);text-decoration:none;cursor:pointer}.card-link:hover{text-decoration:underline}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], heading: [{
                type: Input
            }], description: [{
                type: Input
            }], linkText: [{
                type: Input
            }] } });

class DsLinkCardComponent {
    icon = '';
    heading = '';
    description = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsLinkCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: DsLinkCardComponent, isStandalone: true, selector: "ds-link-card", inputs: { icon: "icon", heading: "heading", description: "description" }, ngImport: i0, template: "<mat-card class=\"link-card\" appearance=\"outlined\">\n  <mat-card-content>\n    <div class=\"link-card-layout\">\n      @if (icon) {\n        <mat-icon class=\"link-icon\">{{ icon }}</mat-icon>\n      }\n      <div class=\"link-text\">\n        <h4>{{ heading }}</h4>\n        <p>{{ description }}</p>\n      </div>\n      <mat-icon class=\"chevron\">chevron_right</mat-icon>\n    </div>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}.link-card{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);cursor:pointer;transition:box-shadow .2s ease,border-color .2s ease;border-left:4px solid var(--ds-color-neutral-300, #e0e0e0)}.link-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e);box-shadow:var(--ds-elevation-sm, 0 2px 8px rgba(0, 0, 0, .1))}.link-card-layout{display:flex;align-items:center;gap:1rem}.link-icon{font-size:32px;width:32px;height:32px;color:var(--ds-color-primary-base, #003b7e);flex-shrink:0}.link-text{flex:1}.link-text h4{margin:0 0 .25rem;font-size:var(--ds-font-size-base, 1rem);font-weight:var(--ds-font-weight-semibold, 600);color:var(--ds-color-primary-base, #003b7e)}.link-text p{margin:0;font-size:var(--ds-font-size-sm, .875rem);color:var(--ds-color-text-secondary, #616161);line-height:1.5}.chevron{color:var(--ds-color-text-secondary, #616161);flex-shrink:0}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1$2.MatCardContent, selector: "mat-card-content" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsLinkCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-link-card', standalone: true, imports: [MatIconModule, MatCardModule], template: "<mat-card class=\"link-card\" appearance=\"outlined\">\n  <mat-card-content>\n    <div class=\"link-card-layout\">\n      @if (icon) {\n        <mat-icon class=\"link-icon\">{{ icon }}</mat-icon>\n      }\n      <div class=\"link-text\">\n        <h4>{{ heading }}</h4>\n        <p>{{ description }}</p>\n      </div>\n      <mat-icon class=\"chevron\">chevron_right</mat-icon>\n    </div>\n  </mat-card-content>\n</mat-card>\n", styles: [":host{display:block}.link-card{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);cursor:pointer;transition:box-shadow .2s ease,border-color .2s ease;border-left:4px solid var(--ds-color-neutral-300, #e0e0e0)}.link-card:hover{border-left-color:var(--ds-color-primary-base, #003b7e);box-shadow:var(--ds-elevation-sm, 0 2px 8px rgba(0, 0, 0, .1))}.link-card-layout{display:flex;align-items:center;gap:1rem}.link-icon{font-size:32px;width:32px;height:32px;color:var(--ds-color-primary-base, #003b7e);flex-shrink:0}.link-text{flex:1}.link-text h4{margin:0 0 .25rem;font-size:var(--ds-font-size-base, 1rem);font-weight:var(--ds-font-weight-semibold, 600);color:var(--ds-color-primary-base, #003b7e)}.link-text p{margin:0;font-size:var(--ds-font-size-sm, .875rem);color:var(--ds-color-text-secondary, #616161);line-height:1.5}.chevron{color:var(--ds-color-text-secondary, #616161);flex-shrink:0}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], heading: [{
                type: Input
            }], description: [{
                type: Input
            }] } });

class DsFooterComponent {
    companyName = '';
    year = new Date().getFullYear();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: DsFooterComponent, isStandalone: true, selector: "ds-footer", inputs: { companyName: "companyName", year: "year" }, ngImport: i0, template: "<footer>\n  <div class=\"footer-inner\">\n    <div class=\"footer-top\">\n      <ng-content select=\"[footerLinks]\"></ng-content>\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"footer-bottom\">\n      <span class=\"copyright\">&copy; {{ year }} {{ companyName }}</span>\n      <div class=\"social\">\n        <ng-content select=\"[footerSocial]\"></ng-content>\n      </div>\n    </div>\n  </div>\n</footer>\n", styles: [":host{display:block}footer{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);background-color:var(--ds-color-neutral-900, #1a1a2e);color:var(--ds-color-neutral-300, #bdbdbd);padding:2.5rem 1.5rem 1.5rem}.footer-inner{max-width:1100px;margin:0 auto}.footer-top{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-bottom:2rem}.footer-top ::ng-deep>*{display:contents}.footer-top ::ng-deep h4{color:#fff;font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-semibold, 600);text-transform:uppercase;letter-spacing:.05em;margin:0 0 1rem}.footer-top ::ng-deep ul{list-style:none;padding:0;margin:0}.footer-top ::ng-deep ul li{margin-bottom:.5rem}.footer-top ::ng-deep ul a{color:var(--ds-color-neutral-400, #9e9e9e);text-decoration:none;font-size:var(--ds-font-size-sm, .875rem);transition:color .15s}.footer-top ::ng-deep ul a:hover{color:#fff}mat-divider{border-top-color:#ffffff1f}.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:1.5rem;flex-wrap:wrap;gap:1rem}.copyright{font-size:var(--ds-font-size-sm, .875rem)}.social{display:flex;gap:2rem}.social ::ng-deep>*{display:contents}.social ::ng-deep a,.social ::ng-deep button{color:var(--ds-color-neutral-400, #9e9e9e);transition:color .15s}.social ::ng-deep a:hover,.social ::ng-deep button:hover{color:#fff}@media(max-width:600px){.footer-bottom{flex-direction:column;text-align:center}}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i1$3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: DsFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ds-footer', standalone: true, imports: [MatIconModule, MatButtonModule, MatDividerModule], template: "<footer>\n  <div class=\"footer-inner\">\n    <div class=\"footer-top\">\n      <ng-content select=\"[footerLinks]\"></ng-content>\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"footer-bottom\">\n      <span class=\"copyright\">&copy; {{ year }} {{ companyName }}</span>\n      <div class=\"social\">\n        <ng-content select=\"[footerSocial]\"></ng-content>\n      </div>\n    </div>\n  </div>\n</footer>\n", styles: [":host{display:block}footer{font-family:var(--ds-font-family-base, \"Roboto\", sans-serif);background-color:var(--ds-color-neutral-900, #1a1a2e);color:var(--ds-color-neutral-300, #bdbdbd);padding:2.5rem 1.5rem 1.5rem}.footer-inner{max-width:1100px;margin:0 auto}.footer-top{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-bottom:2rem}.footer-top ::ng-deep>*{display:contents}.footer-top ::ng-deep h4{color:#fff;font-size:var(--ds-font-size-sm, .875rem);font-weight:var(--ds-font-weight-semibold, 600);text-transform:uppercase;letter-spacing:.05em;margin:0 0 1rem}.footer-top ::ng-deep ul{list-style:none;padding:0;margin:0}.footer-top ::ng-deep ul li{margin-bottom:.5rem}.footer-top ::ng-deep ul a{color:var(--ds-color-neutral-400, #9e9e9e);text-decoration:none;font-size:var(--ds-font-size-sm, .875rem);transition:color .15s}.footer-top ::ng-deep ul a:hover{color:#fff}mat-divider{border-top-color:#ffffff1f}.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:1.5rem;flex-wrap:wrap;gap:1rem}.copyright{font-size:var(--ds-font-size-sm, .875rem)}.social{display:flex;gap:2rem}.social ::ng-deep>*{display:contents}.social ::ng-deep a,.social ::ng-deep button{color:var(--ds-color-neutral-400, #9e9e9e);transition:color .15s}.social ::ng-deep a:hover,.social ::ng-deep button:hover{color:#fff}@media(max-width:600px){.footer-bottom{flex-direction:column;text-align:center}}\n"] }]
        }], propDecorators: { companyName: [{
                type: Input
            }], year: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { DsButtonComponent, DsCardComponent, DsFeatureCardComponent, DsFooterComponent, DsHeroComponent, DsInputComponent, DsLinkCardComponent, DsNavbarComponent };
//# sourceMappingURL=jablonowski-components.mjs.map
