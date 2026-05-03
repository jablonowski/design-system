import type { Preview } from '@storybook/angular';

const preview: Preview = {
  decorators: [
    (story, context) => {
      // Auto-detect customer from story title path
      const title: string = context.title || '';
      const customer = title.startsWith('NG Bank') ? 'ng-bank' : 'ds-bank';

      // Dynamically load the correct customer CSS variables
      const existingLink = document.getElementById('ds-customer-tokens');
      const expectedHref = customer === 'ng-bank'
        ? 'ng-bank-variables.css'
        : 'ds-bank-variables.css';

      if (existingLink && existingLink.getAttribute('href') !== expectedHref) {
        existingLink.remove();
      }

      if (!document.getElementById('ds-customer-tokens')) {
        const link = document.createElement('link');
        link.id = 'ds-customer-tokens';
        link.rel = 'stylesheet';
        link.href = expectedHref;
        document.head.appendChild(link);
      }

      return story();
    },
  ],
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;
