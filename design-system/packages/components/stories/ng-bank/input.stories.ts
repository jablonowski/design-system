import type { Meta, StoryObj } from '@storybook/angular';
import { DsInputComponent } from '../../src/lib/input/input.component';

const meta: Meta<DsInputComponent> = {
  title: 'NG Bank/Input',
  component: DsInputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<DsInputComponent>;

export const Default: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Jan Kowalski',
    type: 'text',
    disabled: false,
  },
};

export const Email: Story = {
  args: {
    label: 'E-mail',
    placeholder: 'jan@example.com',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
};

export const Multiline: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message...',
    multiline: true,
    rows: 5,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    value: 'Cannot edit',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <ds-input label="Text" placeholder="Text input"></ds-input>
        <ds-input label="Email" placeholder="email@example.com" type="email"></ds-input>
        <ds-input label="Password" placeholder="••••••" type="password"></ds-input>
        <ds-input label="Textarea" placeholder="Message..." [multiline]="true" [rows]="4"></ds-input>
        <ds-input label="Disabled" value="Read only" [disabled]="true"></ds-input>
      </div>
    `,
  }),
};
