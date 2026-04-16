import * as i0 from "@angular/core";
export declare class DsNavbarComponent {
    brand: string;
    sticky: boolean;
    isSticky: boolean;
    activeMenu: string | null;
    onScroll(): void;
    toggleMenu(name: string): void;
    closeMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DsNavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DsNavbarComponent, "ds-navbar", never, { "brand": { "alias": "brand"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; }, {}, never, ["[navLinks]", "[navActions]", "[megaMenu]"], true, never>;
}
