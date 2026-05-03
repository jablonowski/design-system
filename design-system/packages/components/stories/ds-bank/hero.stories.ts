import type { Meta, StoryObj } from '@storybook/angular';
import { DsHeroComponent } from '../../src/lib/hero/hero.component';
import { DsButtonComponent } from '../../src/lib/button/button.component';

const meta: Meta<DsHeroComponent> = {
  title: 'DS Bank/Hero',
  component: DsHeroComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsHeroComponent>;

export const Default: Story = {
  render: () => ({
    moduleMetadata: { imports: [DsButtonComponent] },
    template: `
      <ds-hero heading="Welcome to DS Bank" subtitle="Manage your finances with ease">
        <ul>
          <li>Free ATM withdrawals</li>
          <li>24/7 mobile banking</li>
          <li>Instant BLIK payments</li>
        </ul>
        <div heroActions>
          <ds-button variant="primary">Open account</ds-button>
        </div>
      </ds-hero>
    `,
  }),
};

export const WithBackgroundImage: Story = {
  render: () => ({
    moduleMetadata: { imports: [DsButtonComponent] },
    template: `
      <ds-hero
        heading="Internet banking"
        subtitle="Take control of your finances online"
        backgroundImage="https://picsum.photos/id/60/1200/600">
        <ul>
          <li>Submit applications online</li>
          <li>Schedule one-time or recurring transfers</li>
          <li>Works on desktop, tablet, and mobile</li>
        </ul>
        <div heroActions>
          <ds-button variant="primary">Get started</ds-button>
        </div>
      </ds-hero>
    `,
  }),
};

export const MinimalContent: Story = {
  render: () => ({
    moduleMetadata: { imports: [DsButtonComponent] },
    template: `
      <ds-hero heading="Simple hero" subtitle="Just a heading and subtitle">
        <div heroActions>
          <ds-button variant="secondary">Learn more</ds-button>
        </div>
      </ds-hero>
    `,
  }),
};
