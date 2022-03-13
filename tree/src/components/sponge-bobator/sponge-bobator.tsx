import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sponge-bobator',
  styleUrl: 'sponge-bobator.css',
})
export class SpongeBobator {
  @Prop() text: string;

  private alter(): string {
    if (!!this.text) {
      return this.text
        .split('')
        .map((c, i) => (i % 2 === 0 ? c.toLocaleUpperCase() : c))
        .join('');
    } else {
      return '';
    }
  }

  render() {
    return <div class="pad">{this.alter()}</div>;
  }
}
