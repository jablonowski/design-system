import type { Meta, StoryObj } from '@storybook/angular';
import { DsButtonComponent } from '../../src/lib/button/button.component';

const meta: Meta<DsButtonComponent> = {
  title: 'DS Bank/Button',
  component: DsButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warn'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<DsButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', disabled: false },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Click me</ds-button>`,
  }),
};

export const Secondary: Story = {
  args: { variant: 'secondary', disabled: false },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled">Secondary</ds-button>`,
  }),
};

export const Warn: Story = {
  args: { variant: 'warn', disabled: false },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled">Warning</ds-button>`,
  }),
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled">Disabled</ds-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <ds-button variant="primary">Primary</ds-button>
        <ds-button variant="secondary">Secondary</ds-button>
        <ds-button variant="warn">Warn</ds-button>
        <ds-button variant="primary" [disabled]="true">Disabled</ds-button>
      </div>
    `,
  }),
};
