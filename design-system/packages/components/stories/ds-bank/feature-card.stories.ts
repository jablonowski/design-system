import type { Meta, StoryObj } from '@storybook/angular';
import { DsFeatureCardComponent } from '../../src/lib/feature-card/feature-card.component';

const meta: Meta<DsFeatureCardComponent> = {
  title: 'DS Bank/Feature Card',
  component: DsFeatureCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsFeatureCardComponent>;

export const Default: Story = {
  args: {
    icon: 'swap_horiz',
    heading: 'Fast transfers',
    description: 'Instant transfers, BLIK, standing orders — all at your fingertips 24/7.',
    linkText: 'Learn more',
  },
};

export const WithoutLink: Story = {
  args: {
    icon: 'savings',
    heading: 'Savings account',
    description: 'Attractive interest rates on your savings.',
    linkText: '',
  },
};

export const Grid: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 800px;">
        <ds-feature-card icon="swap_horiz" heading="Transfers" description="Instant domestic & international transfers." linkText="More"></ds-feature-card>
        <ds-feature-card icon="savings" heading="Savings" description="High-interest savings accounts and deposits." linkText="More"></ds-feature-card>
        <ds-feature-card icon="credit_card" heading="Cards" description="Debit and credit cards with cashback rewards." linkText="More"></ds-feature-card>
      </div>
    `,
  }),
};
