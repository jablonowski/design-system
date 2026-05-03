import type { Meta, StoryObj } from '@storybook/angular';
import { DsLinkCardComponent } from '../../src/lib/link-card/link-card.component';

const meta: Meta<DsLinkCardComponent> = {
  title: 'DS Bank/Link Card',
  component: DsLinkCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DsLinkCardComponent>;

export const Default: Story = {
  args: {
    icon: 'fingerprint',
    heading: 'Biometric login',
    description: 'Log in with fingerprint or face scan — fast and secure.',
  },
};

export const Grid: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 700px;">
        <ds-link-card icon="fingerprint" heading="Biometric login" description="Log in with fingerprint or face scan."></ds-link-card>
        <ds-link-card icon="verified_user" heading="Mobile authorization" description="Confirm transactions with a single tap."></ds-link-card>
        <ds-link-card icon="notifications_active" heading="Push notifications" description="Real-time alerts for every account activity."></ds-link-card>
        <ds-link-card icon="gpp_good" heading="Fraud protection" description="24/7 transaction monitoring systems."></ds-link-card>
      </div>
    `,
  }),
};
