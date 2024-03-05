// apexImperativeMethod.js
import { LightningElement, track } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class ApexImperativeMethod extends LightningElement {
  @track contacts;
  @track error;

  handleLoad() {
    getContactList()//promises
      .then((result) => {     //unnamed fatarrow function 
        this.contacts = result;
      })
      .catch((error) => {
        this.error = error;
      });
  }
}