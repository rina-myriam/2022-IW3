import { LitElement, html, css } from 'lit';
import { Base } from '../Base';
import "../components/product-card";

export class AppCart extends Base {
  constructor() {
    super();
  }

  render() {
    return html `
        <h1>PANIER</h1>
    `;
  }
}
customElements.define('app-cart', AppCart);