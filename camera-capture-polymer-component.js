import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import htmlTemplate from 'camera-capture-polymer-component.html';

/**
 * `camera-capture-polymer-component`
 * Component to open camera and capture picture
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CameraCapturePolymerComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
      </canvas> 
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'camera-capture-polymer-component',
      },
    };
  }
}

window.customElements.define('camera-capture-polymer-component', CameraCapturePolymerComponent);
