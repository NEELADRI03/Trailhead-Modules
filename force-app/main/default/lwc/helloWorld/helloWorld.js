import { LightningElement, api } from "lwc";

export default class extends LightningElement {
  @api objectApiName;

  get computedClassNames() {
    this.objectApiName === 'Account' ? "slds-theme_shade" : "slds-theme_success"
    return ["slds-box","slds-theme_alert-texture"
    ];
  }
}