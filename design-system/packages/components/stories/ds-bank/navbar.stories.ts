import type { Meta, StoryObj } from '@storybook/angular';
import { DsNavbarComponent } from '../../src/lib/navbar/navbar.component';
import { DsButtonComponent } from '../../src/lib/button/button.component';

const meta: Meta<DsNavbarComponent> = {
  title: 'DS Bank/Navbar',
  component: DsNavbarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<DsNavbarComponent>;

export const Default: Story = {
  render: () => ({
    moduleMetadata: { imports: [DsButtonComponent] },
    template: `
      <ds-navbar brand="DS Bank" #navbar>
        <div navLinks>
          <button mat-button>Products</button>
          <button mat-button>Services</button>
          <button mat-button>Help</button>
        </div>
        <div navActions>
          <ds-button variant="secondary">Log in</ds-button>
        </div>
      </ds-navbar>
    `,
  }),
};

export const WithMegaMenu: Story = {
  render: () => ({
    moduleMetadata: { imports: [DsButtonComponent] },
    template: `
      <ds-navbar brand="DS Bank" #navbar>
        <div navLinks>
          <button mat-button (click)="navbar.toggleMenu('products')">Products</button>
          <button mat-button (click)="navbar.closeMenu()">Help</button>
        </div>
        <div navActions>
          <ds-button variant="secondary">Log in</ds-button>
        </div>
        <div megaMenu>
          @if (navbar.activeMenu === 'products') {
            <h3>Our Products</h3>
            <p>Choose from our wide range of banking products.</p>
          }
        </div>
      </ds-navbar>
    `,
  }),
};
