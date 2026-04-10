import { Component } from '@angular/core';
import { DsButtonComponent, DsInputComponent, DsCardComponent } from '@jablonowski/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DsButtonComponent, DsInputComponent, DsCardComponent],
  template: `
    <header>
      <h1>Design System — Example</h1>
      <p>Components imported from <code>&#64;jablonowski/components</code></p>
    </header>

    <main>
      <section>
        <h2>Buttons</h2>
        <div class="row">
          <ds-button variant="primary">Primary</ds-button>
          <ds-button variant="secondary">Secondary</ds-button>
          <ds-button variant="warn">Warn</ds-button>
          <ds-button [disabled]="true">Disabled</ds-button>
        </div>
      </section>

      <section>
        <h2>Inputs</h2>
        <div class="row">
          <ds-input label="Email" placeholder="you&#64;example.com" type="email"></ds-input>
          <ds-input label="Password" placeholder="••••••••" type="password"></ds-input>
          <ds-input label="Disabled" [disabled]="true" placeholder="Can't type here"></ds-input>
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div class="row">
          <ds-card title="Tokens">
            <p>Design tokens generated with Style Dictionary — colors, typography, spacing and more.</p>
          </ds-card>
          <ds-card title="Components">
            <p>Angular Material wrapped with design tokens for consistent styling.</p>
          </ds-card>
          <ds-card title="Theming">
            <p>PKO-inspired palette with CSS custom properties for easy customisation.</p>
          </ds-card>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 960px;
      margin: 0 auto;
      padding: 2rem;
    }
    header {
      margin-bottom: 2rem;
    }
    header h1 {
      margin: 0;
      color: var(--ds-color-primary-base, #003b7e);
    }
    header p {
      color: #666;
    }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    section {
      margin-bottom: 2rem;
    }
    h2 {
      border-bottom: 2px solid var(--ds-color-primary-base, #003b7e);
      padding-bottom: 0.25rem;
      color: var(--ds-color-primary-base, #003b7e);
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-start;
    }
  `],
})
export class AppComponent {}
