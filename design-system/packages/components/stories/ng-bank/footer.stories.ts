import type { Meta, StoryObj } from '@storybook/angular';
import { DsFooterComponent } from '../../src/lib/footer/footer.component';

const meta: Meta<DsFooterComponent> = {
  title: 'NG Bank/Footer',
  component: DsFooterComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    companyName: { control: 'text' },
    year: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<DsFooterComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ds-footer [companyName]="companyName" [year]="year">
        <div footerLinks>
          <div style="display:flex; gap:2rem;">
            <div>
              <h4>Products</h4>
              <ul style="list-style:none; padding:0;">
                <li><a href="#">Personal Account</a></li>
                <li><a href="#">Credit Card</a></li>
                <li><a href="#">Mortgage</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul style="list-style:none; padding:0;">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div footerSocial>
          <button mat-icon-button><mat-icon>facebook</mat-icon></button>
          <button mat-icon-button><mat-icon>language</mat-icon></button>
        </div>
      </ds-footer>
    `,
  }),
  args: {
    companyName: 'NG Bank',
    year: 2025,
  },
};

export const Minimal: Story = {
  args: {
    companyName: 'NG Bank N.V.',
    year: 2025,
  },
};
