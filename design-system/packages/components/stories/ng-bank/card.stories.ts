import type { Meta, StoryObj } from '@storybook/angular';
import { DsCardComponent } from '../../src/lib/card/card.component';

const meta: Meta<DsCardComponent> = {
  title: 'NG Bank/Card',
  component: DsCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsCardComponent>;

export const WithTitle: Story = {
  args: { title: 'Account overview' },
  render: (args) => ({
    props: args,
    template: `
      <ds-card [title]="title">
        <p>Your current balance is <strong>12 450,00 PLN</strong></p>
      </ds-card>
    `,
  }),
};

export const WithoutTitle: Story = {
  render: () => ({
    template: `
      <ds-card>
        <p>A simple content card without a title header.</p>
      </ds-card>
    `,
  }),
};

export const MultipleCards: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 600px;">
        <ds-card title="Savings">
          <p>Balance: <strong>8 200,00 PLN</strong></p>
        </ds-card>
        <ds-card title="Credit card">
          <p>Available limit: <strong>15 000,00 PLN</strong></p>
        </ds-card>
      </div>
    `,
  }),
};
