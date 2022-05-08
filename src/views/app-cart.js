import { LitElement, html, css } from 'lit';
import { Base } from '../Base';
import "../components/product-card";

export class AppCart extends Base {
  constructor() {
    super();

    this.cart = [];
  }

  static get properties() {
    return {
      cart: { type: Array },
    };
  }

  render() {
    return this.cart.map(productCart => html`
      <product-card
        .product="${productCart}"
      ></product-card>
    `);
  }
}
customElements.define('app-cart', AppCart);
