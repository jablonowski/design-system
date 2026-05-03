import type { Meta, StoryObj } from '@storybook/angular';
import { NgBankPromoBarComponent } from '../../ng-bank/src/lib/promo-bar/promo-bar.component';

const meta: Meta<NgBankPromoBarComponent> = {
  title: 'NG Bank/Promo Bar',
  component: NgBankPromoBarComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'info'],
    },
    icon: { control: 'text' },
    message: { control: 'text' },
    linkText: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<NgBankPromoBarComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    icon: 'campaign',
    message: 'Open an account and get 300 PLN bonus!',
    linkText: 'Learn more',
    dismissible: true,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    icon: 'star',
    message: 'New! Mobile payments available now.',
    linkText: 'Try it out',
    dismissible: true,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    icon: 'info',
    message: 'Planned maintenance on Saturday 10PM–2AM.',
    linkText: '',
    dismissible: false,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:1rem;">
        <ng-promo-bar variant="primary" icon="campaign" message="Primary promo message" linkText="Learn more"></ng-promo-bar>
        <ng-promo-bar variant="accent" icon="star" message="Accent promo message" linkText="Try it out"></ng-promo-bar>
        <ng-promo-bar variant="info" icon="info" message="Info promo message" [dismissible]="false"></ng-promo-bar>
      </div>
    `,
  }),
};
