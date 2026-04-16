import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DsInputComponent {
    label: string;
    placeholder: string;
    value: string;
    type: 'text' | 'email' | 'password' | 'number';
    disabled: boolean;
    multiline: boolean;
    rows: number;
    valueChange: EventEmitter<string>;
    onInput(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DsInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DsInputComponent, "ds-input", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "multiline": { "alias": "multiline"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
