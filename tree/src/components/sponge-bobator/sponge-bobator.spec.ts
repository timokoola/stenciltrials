import { newSpecPage } from '@stencil/core/testing';
import { SpongeBobator } from './sponge-bobator';

describe('sponge-bobator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SpongeBobator],
      html: '<sponge-bobator />',
    });
    expect(root).toEqualHtml(`
    <sponge-bobator>
    <div class="pad"></div>
    </sponge-bobator>`);
  });
});
