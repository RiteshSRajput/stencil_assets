import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  inputChanged(event) {
    console.log('input changed: ', event.target.value);
  }


  render() {
    return (
      <div>
        <link rel="stylesheet" href="/assets/external.css" />
        <div class="tag-div">
          <input aria-haspopup="listbox" name="searchbox"  onChange={(event: UIEvent) => this.inputChanged(event)} aria-label="Enter recipient name" id="txtInput" class="dxp-form-control searchbox" placeholder="Enter recipient name"/>
        </div>
      </div>
    );
  }
}
