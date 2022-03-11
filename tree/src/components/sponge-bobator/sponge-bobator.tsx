import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sponge-bobator',
  styleUrl: 'sponge-bobator.css',
})
export class SpongeBobator {
  @Prop() text: string;

  render() {
    return <div class="pad">{this.text}</div>;
  }
}
