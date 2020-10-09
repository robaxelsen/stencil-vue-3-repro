import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({reflect: false}) data: string | Array<Object> | Object;

  render() {
    return <div>{JSON.stringify(this.data)}</div>;
  }
}
